import * as React from 'react';
import { Button, ConfigProvider, Input, Result } from 'antd';

const AntdTest = () => {
  return (
    <div>
      <ConfigProvider theme={{ token: { colorPrimary: 'red' } }}>
        <Button type="primary">按钮</Button>
        <Input placeholder="请输入"></Input>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          token: { lineHeight: 1.4 },
          components: {
            Result: { titleFontSize: 60, subtitleFontSize: 40, lineHeight: 10 }
          }
        }}
      >
        <Result
          status="success"
          title="Successfully Purchased Cloud Server ECS!"
          subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
            <Button key="buy">Buy Again</Button>
          ]}
        >
          HELLO
        </Result>
      </ConfigProvider>
    </div>
  );
};

export default AntdTest;
