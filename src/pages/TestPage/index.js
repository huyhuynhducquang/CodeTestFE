import TestTable from './TestTable';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import './TestPage.scss';

function TestPage() {
    return (
        <div>
            <div className="page-header">
                <h3>MANAGE TEST</h3>
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
            <TestTable></TestTable>
        </div>
    );
}

export default TestPage;
