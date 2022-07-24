import { Input, InputAdornment } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import './QuestionForm.scss';

function QuestionForm({ open, onClickOpen }) {
    return (
        <Dialog
            open={open}
            onClose={onClickOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div className="container">
                <DialogTitle id="alert-dialog-title">Question form</DialogTitle>
                <DialogContent class="row questionForm-content">
                    <Input placeholder="Question title" />
                    <Input placeholder="Question text" multiline />
                    <Input placeholder="Point" endAdornment={<InputAdornment position="end">point</InputAdornment>} />
                    <Input
                        placeholder="Time litmit"
                        endAdornment={<InputAdornment position="end">secounds</InputAdornment>}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClickOpen} autoFocus>
                        Create
                    </Button>
                    <Button onClick={onClickOpen}>None</Button>
                </DialogActions>
            </div>
        </Dialog>
    );
}

export default QuestionForm;
