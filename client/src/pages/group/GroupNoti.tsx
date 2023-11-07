import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import '../../styles/scss/pages/group/groupNoti.scss';

import GroupHeader from '../../components/group/content/GroupHeader';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@mui/material';

//=== 테이블 정의
interface Column {
    id: 'id' | 'title' | 'writer' | 'date';
    label: string;
    minWidth?: number;
    align?: 'center';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'id', label: 'No.', minWidth: 50 },
    { id: 'title', label: '제목', minWidth: 150, align: 'center' },
    {
        id: 'writer',
        label: '작성자',
        minWidth: 80,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'date',
        label: '작성날짜',
        minWidth: 80,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    // {
    //     id: 'density',
    //     label: 'Density',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value: number) => value.toFixed(2),
    // },
];

interface Data {
    id: string;
    title: string;
    writer: string;
    date: string;
}

function createData(
    id: string,
    title: string,
    writer: string,
    date: string
): Data {
    // const density = writer / date;
    return { id, title, writer, date };
}

// //=== 데이터가 들어올 부분 ===
// const reversedRows = Array.from({ length: 50 }, (_, index) =>
//     createData(
//         String(50 - index),
//         `${noticeList.gbTitle} 50 - index}`,
//         `작성자 ${50 - index}`,
//         '2023-11-10'
//     )
// );

// const rows = reversedRows;

// const rows = [
//     createData('India', 'IN', 1324171354, 3287263),
//     createData('China', 'CN', 1403500365, 9596961),
//     createData('Italy', 'IT', 60483973, 301340),
//     createData('United States', 'US', 327167434, 9833520),
//     createData('Canada', 'CA', 37602103, 9984670),
//     createData('Australia', 'AU', 25475400, 7692024),
//     createData('Germany', 'DE', 83019200, 357578),
//     createData('Ireland', 'IE', 4857000, 70273),
//     createData('Mexico', 'MX', 126577691, 1972550),
//     createData('Japan', 'JP', 126317000, 377973),
//     createData('France', 'FR', 67022000, 640679),
//     createData('United Kingdom', 'GB', 67545757, 242495),
//     createData('Russia', 'RU', 146793744, 17098246),
//     createData('Nigeria', 'NG', 200962417, 923768),
//     createData('Brazil', 'BR', 210147125, 8515767),
// ];

export default function Groupidti() {
    const { gSeq, gCategory } = useParams();

    console.log(gSeq, gCategory);

    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    //] 1. 공지 조회
    const getBoardNoti = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/board/${gSeq}/notice`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                setNoticeList(res.data.groupInfo);
            });
    };

    useEffect(() => {
        getBoardNoti();
    }, []);

    const [noticeList, setNoticeList] = useState([]);

    //=== 데이터가 들어올 부분 ===
    // const reversedRows = Array.from({ length: 50 }, (_, index) =>
    //     createData(
    //         String(50 - index),
    //         `${noticeList.gbTitle} 50 - index}`,
    //         `작성자 ${50 - index}`,
    //         '2023-11-10'
    //     )
    // );

    const reversedRows = noticeList.map((item: any, index) =>
        createData(
            // String(noticeList.length - index),
            String(index + 1),
            // replace(/(<([^>]+)>)/gi, '') => html tag 처리
            item.gbTitle.replace(/(<([^>]+)>)/gi, ''),
            item.gbContent.replace(/(<([^>]+)>)/gi, ''),
            item.createdAt
        )
    );

    const rows = reversedRows;

    // 페이지 이동
    const navigate = useNavigate();

    const handleRowClick = (rowId: number) => {
        navigate('/group/idti/1/' + rowId);
    };

    // 테이블
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="section section-group">
            <GroupHeader title={'공지사항'} groupName={'코딩학당'} />
            {/* html tag 처리 */}
            {/* noticeList.map((notice:any)=>{
                return(
                    <div key={notice.gbSeq}>
                        <div dangerouslySetInnerHTML={{__html:notice.gbContent}}/>
                        
                    </div>
                )
            }) */}
            <div className="noti-container">
                <Paper sx={{ width: '100%' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {rows
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((row) => {
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={row.title}
                                            >
                                                {columns.map((column) => {
                                                    const value =
                                                        row[column.id];
                                                    return (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                        >
                                                            <Link
                                                                to={`/board/${gSeq}/noti/${gSeq}`}
                                                            >
                                                                {column.format &&
                                                                typeof value ===
                                                                    'number'
                                                                    ? column.format(
                                                                          value
                                                                      )
                                                                    : value}
                                                            </Link>
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>

                {/* <table classid="idti-table">
                    <thead>
                        <tr>
                            <th>id.</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            classid="table-row-link"
                            onClick={() => handleRowClick(1)}
                        >
                            <td>1</td>
                            <td>
                                [필독] 가입 시 채팅방에 간단한 인사말
                                남겨주세요!
                            </td>
                            <td>달려라하니</td>
                            <td>2023.10.28</td>
                        </tr>
                    </tbody>
                </table>

                <div classid="idti-header">
                    <div>id.</div>
                    <div>제목</div>
                    <div>작성자</div>
                    <div>날짜</div>
                </div>
                <div classid="idti-content">
                    <ul> */}
                {/* [추후] 동적으로 수정 */}
                {/* <Link to="/group/idti/1/1">
                            <li>
                                <div>1</div>
                                <div>
                                    [필독] 가입 시 채팅방에 간단한 인사말
                                    남겨주세요 !
                                </div>
                                <div>달려라하니</div>
                                <div>2023.10.28</div>
                            </li>
                        </Link> */}
                {/* <li>
                            <div>1</div>
                            <div>
                                [필독] 가입 시 채팅방에 간단한 인사말 남겨주세요
                                !
                            </div>
                            <div>달려라하니</div>
                            <div>2023.10.28</div>
                        </li>
                        <li>
                            <div>1</div>
                            <div>
                                [필독] 가입 시 채팅방에 간단한 인사말 남겨주세요
                                !
                            </div>
                            <div>달려라하니</div>
                            <div>2023.10.28</div>
                        </li>
                        <li>
                            <div>1</div>
                            <div>
                                [필독] 가입 시 채팅방에 간단한 인사말 남겨주세요
                                !
                            </div>
                            <div>달려라하니</div>
                            <div>2023.10.28</div>
                        </li> */}
                {/* </ul> */}
                {/* </div> */}
            </div>
            <div>
                <Link to={`/board/create/${gSeq}/${gCategory}`}>
                    <img src="/asset/icons/plus.svg" className="plus-fixed" />
                </Link>
            </div>
        </div>
    );
}
