import { Card, CardBody } from '@material-tailwind/react';
import { SCOPES } from '@server/utils/scopes';
import Button from '@src/components/Button';
import Page from '@src/components/Page';
import ListAccounts from '@src/features/Account/components/List';
import { withScopes } from '@src/features/Auth/withScopes';
import Link from 'next/link';
import { Suspense } from 'react';

const AccountPage = () => {
  return (
    <Page
      title="Danh sách tài khoản"
      headerActions={
        <Link href="/admin/accounts/create">
          <Button>Tài khoản mới</Button>
        </Link>
      }
    >
      <Card>
        <CardBody>
          <Suspense fallback="Loading ...">
            <ListAccounts />
          </Suspense>
        </CardBody>
      </Card>
    </Page>
  );
};

export default withScopes(AccountPage, [SCOPES.READ_ACCOUNTS, SCOPES.WRITE_ACCOUNTS]);
