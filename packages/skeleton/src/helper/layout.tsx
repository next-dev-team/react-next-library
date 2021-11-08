import { CodeOutlined, CopyOutlined, EyeOutlined, FullscreenOutlined } from '@ant-design/icons';
import { useDebounceFn } from 'ahooks';
import { Button, Card, Col, ColProps, Empty, Input, message, Modal, Row, Space } from 'antd';
import { RowProps } from 'antd/lib/grid/row';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
// @ts-ignore
import jsxToString from 'jsx-to-string';
import { capitalize, isEmpty, lowerCase } from 'lodash';
import { ReactNode, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export type IDemoLayout = {
  data: {
    title: string;
    component: ReactNode;
    isFullView?: boolean;
  }[];
  span?: number;
  children?: ReactNode;
  gutter?: RowProps['gutter'];
  colProps?: ColProps;
  isSmallSpan?: boolean;
};

export const DemoLayout = (props: IDemoLayout) => {
  const renderSpan = props.isSmallSpan ? { lg: 6, sm: 10, xs: 8 } : { lg: 12, sm: 12, xs: 24 };
  const {
    data,
    colProps = {
      ...renderSpan,
      ...props.colProps,
    },
    gutter = [20, 20],
  } = props;
  const [title, setTitle] = useState('');
  const [view, setView] = useState<'preview' | 'code' | 'fullCode'>('preview');
  const [itemData, setItemData] = useState(data);

  const { run: onSearch } = useDebounceFn(
    (v: string) => {
      const filterVal = data?.filter((i) => lowerCase(i.title).includes(v.toLowerCase()));
      setItemData(v ? filterVal : data);
    },
    { wait: 100 },
  );

  return (
    <Card
      title={
        <Input
          onChange={(v) => onSearch(v.target?.value)}
          className="max-w-xs"
          placeholder="Search..."
          allowClear
        />
      }
    >
      <Row gutter={gutter} justify={isEmpty(itemData) ? 'center' : 'start'}>
        {isEmpty(itemData) && <Empty />}

        {itemData?.map?.((i, k) => {
          const code =
            view !== 'fullCode'
              ? jsxToString(i.component)
              : `export const ${capitalize(i.title)} = ({...rest}:I${capitalize(i.title)}) => {
          return ${jsxToString(i.component).replace('/>', '{...rest} />')}
        }
        `;

          const copyCode = (
            <Text
              copyable={{
                text: code,
                onCopy: () => {
                  message.success('copies!');
                },
                icon: <CopyOutlined style={{ fontSize: 20, marginLeft: 4, color: '#1890ff' }} />,
                tooltips: false,
              }}
            >
              Copy
            </Text>
          );

          return (
            <>
              <Modal
                destroyOnClose
                onCancel={() => setTitle('')}
                style={{ minWidth: 800, borderRadius: 4 }}
                bodyStyle={{ minHeight: 300 }}
                visible={i.title === title}
                footer={false}
                title={
                  <Row justify="space-between" align="middle">
                    <Space>
                      <Button
                        type={view === 'preview' ? 'primary' : 'default'}
                        onClick={() => setView('preview')}
                      >
                        <EyeOutlined style={{ fontSize: 22 }} />
                        <Text>Preview</Text>
                      </Button>
                      <Button
                        type={view === 'code' ? 'primary' : 'default'}
                        onClick={() => setView('code')}
                      >
                        <CodeOutlined style={{ fontSize: 20 }} />

                        <Text>Sort Code</Text>
                      </Button>
                      <Button
                        type={view === 'fullCode' ? 'primary' : 'default'}
                        onClick={() => setView('fullCode')}
                      >
                        <CodeOutlined style={{ fontSize: 20 }} />
                        <Text>Full Code</Text>
                      </Button>
                    </Space>
                    <div style={{ marginRight: 30 }}>{copyCode}</div>
                  </Row>
                }
              >
                {view === 'preview' ? (
                  i.component
                ) : (
                  <>
                    <SyntaxHighlighter
                      language="javascript"
                      style={docco}
                      customStyle={{ minHeight: 300 }}
                    >
                      {code}
                    </SyntaxHighlighter>
                  </>
                )}
              </Modal>

              <Col key={k} {...colProps}>
                <div className="flex items-center mb-5">
                  <Title className="mr-3 text-lg mb-0">{i.title}</Title>
                  <FullscreenOutlined
                    style={{ fontSize: 20, marginRight: 12, color: '#1890ff' }}
                    onClick={() => setTitle(i.title)}
                  />
                  {copyCode}
                </div>
                {i?.component}
              </Col>
            </>
          );
        })}
      </Row>
    </Card>
  );
};
