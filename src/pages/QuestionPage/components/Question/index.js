import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Chip } from '@mui/material';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import './Question.scss';
import QuestionForm from '../QuestionForm';

const data = {
    questionTitle: 'Lorem Ipsum',
    questionText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    point: 10,
    timeLimit: 60,
    questionType: 0,
};

function Question() {
  

    return (
        <Card>
            <CardContent>
                <div className="question-title">
                    <p>
                        <span>{data.questionTitle} - </span>
                        {data.questionText}
                    </p>
                </div>
                <div className="question-information">
                    <Chip
                        label={data.timeLimit + ' secounds'}
                        color="warning"
                        icon={<HourglassTopIcon />}
                        size="small"
                    />
                    <Chip label={data.point + ' points'} color="info" icon={<GolfCourseIcon />} size="small" />
                    <Chip
                        label={data.questionType === 0 ? 'Text' : 'Multip choices'}
                        color="secondary"
                        icon={<FormatListBulletedIcon />}
                        size="small"
                    />
                </div>
            </CardContent>
        </Card>
    );
}

export default Question;
