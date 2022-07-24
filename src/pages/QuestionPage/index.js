import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import TestDetails from './components/TestDetails';
import Question from './components/Question';

import './QuestionPage.scss';
import { Button, Input, Pagination } from '@mui/material';
import QuestionForm from './components/QuestionForm';

function createData(questionTitle, questionText, point, timeLimit, questionType) {
    return { questionTitle, questionText, point, timeLimit, questionType };
}

const datas = [
    createData(
        'Lorem Ipsum',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        10,
        60,
        0,
    ),

    createData(
        'Lorem Ipsum',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        10,
        60,
        1,
    ),
    createData(
        'Lorem Ipsum',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        10,
        60,
        1,
    ),
    createData(
        'Lorem Ipsum',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        10,
        60,
        0,
    ),
    createData(
        'Lorem Ipsum',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        10,
        60,
        0,
    ),
];

function QuestionPage() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <QuestionForm open={open} onClickOpen={handleClickOpen} />
            <div className="page-header">
                <h3>Questions</h3>
                <div role="presentation">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="#">
                            MUI
                        </Link>
                        <Link underline="hover" color="inherit" href="#">
                            Core
                        </Link>
                        <Link underline="hover" color="text.primary" href="#" aria-current="page">
                            Breadcrumbs
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>
            <div className="page-content">
                <TestDetails />
                <h3>Questions</h3>
                <div className="tool-container">
                    <Input placeholder="Search..." />
                    <div className="tool-container--left">
                        <Button color="success" variant="outlined" onClick={handleClickOpen}>
                            Create
                        </Button>
                        <Button color="error" variant="outlined">
                            Delete
                        </Button>
                    </div>
                </div>
                {datas.map((index) => (
                    <Question key={index} />
                ))}
            </div>
            <Pagination className="page-pagination" count={10} />
        </div>
    );
}

export default QuestionPage;
