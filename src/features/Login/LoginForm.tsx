'use client';

import { Button, Card, Checkbox, Input, Typography } from '@material-tailwind/react';

const LoginForm = () => {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Login
      </Typography>

      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>
        <Checkbox
          label={
            <Typography variant="small" color="gray" className="flex items-center font-normal">
              Remember me
            </Typography>
          }
          containerProps={{ className: '-ml-2.5' }}
        />
        <Button className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{' '}
          <a href="#" className="font-medium text-blue-500 transition-colors hover:text-blue-700">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
};

export default LoginForm;