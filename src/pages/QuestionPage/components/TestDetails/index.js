import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import PublishIcon from '@mui/icons-material/Publish';
import ListIcon from '@mui/icons-material/List';
import PeopleIcon from '@mui/icons-material/People';

import './TestDetails.scss';

function TestDetails() {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lorem ipsum dolor sit amet
                </Typography>
                <Chip label="Published" color="primary" size="small" icon={<PublishIcon />} />
                <Typography className="test-content" variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </Typography>
                <div className="test-information">
                    <div className="infor-chip">
                        <ListIcon />
                        <span>31 questions</span>
                    </div>
                    <div className="infor-chip">
                        <PeopleIcon />
                        <span>132 candidates</span>
                    </div>
                </div>
                <p>Last modified: 20:00 - 10-08-2022</p>
            </CardContent>
        </Card>
    );
}

export default TestDetails;
