import React, { useState } from "react";
import {
  Card,
  Button,
  Space,
  Input,
  Select,
  DatePicker,
  Switch,
  Radio,
  Checkbox,
  Progress,
  Tag,
  Breadcrumb,
  Tabs,
  Table,
  Form,
  notification,
  message,
  Modal,
  Typography,
  Divider,
  Row,
  Col,
} from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  BellOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

// 表格数据示例
const tableData = [
  {
    key: "1",
    name: "张三",
    age: 32,
    address: "上海市浦东新区",
    tags: ["开发者", "前端"],
  },
  {
    key: "2",
    name: "李四",
    age: 42,
    address: "北京市朝阳区",
    tags: ["设计师"],
  },
  {
    key: "3",
    name: "王五",
    age: 28,
    address: "广州市天河区",
    tags: ["产品经理", "敏捷"],
  },
];

const tableColumns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "标签",
    key: "tags",
    dataIndex: "tags",
    render: (tags: string[]) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "产品经理") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const ThemePage: React.FC = () => {
  const [switchValue, setSwitchValue] = useState(false);
  const [radioValue, setRadioValue] = useState(1);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const showNotification = () => {
    notification.open({
      message: "通知标题",
      description: "这是一个橙色主题的通知消息，展示了自定义的颜色配置。",
      icon: <BellOutlined style={{ color: "#f97316" }} />,
    });
  };

  const showMessage = () => {
    message.success("这是一个成功消息");
  };

  const tabItems = [
    {
      key: "1",
      label: "基础组件",
      children: (
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <Card title="按钮组件" size="small">
            <Space wrap>
              <Button type="primary">主要按钮</Button>
              <Button>默认按钮</Button>
              <Button type="dashed">虚线按钮</Button>
              <Button type="text">文本按钮</Button>
              <Button type="link">链接按钮</Button>
              <Button danger>危险按钮</Button>
            </Space>
          </Card>

          <Card title="输入组件" size="small">
            <Space direction="vertical" style={{ width: "100%" }}>
              <Input placeholder="请输入内容" />
              <Select defaultValue="option1" style={{ width: 200 }}>
                <Option value="option1">选项一</Option>
                <Option value="option2">选项二</Option>
                <Option value="option3">选项三</Option>
              </Select>
              <DatePicker placeholder="选择日期" />
              <TextArea rows={4} placeholder="多行文本输入" />
            </Space>
          </Card>
        </Space>
      ),
    },
    {
      key: "2",
      label: "反馈组件",
      children: (
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <Card title="反馈组件" size="small">
            <Space wrap>
              <Button onClick={showNotification}>显示通知</Button>
              <Button onClick={showMessage}>显示消息</Button>
              <Button onClick={() => setModalVisible(true)}>打开模态框</Button>
            </Space>
          </Card>

          <Card title="进度条" size="small">
            <Space direction="vertical" style={{ width: "100%" }}>
              <Progress percent={30} />
              <Progress percent={50} status="active" />
              <Progress percent={70} status="exception" />
              <Progress percent={100} />
            </Space>
          </Card>
        </Space>
      ),
    },
    {
      key: "3",
      label: "数据展示",
      children: (
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <Card title="标签和面包屑" size="small">
            <Space direction="vertical" style={{ width: "100%" }}>
              <div>
                <Text strong>标签：</Text>
                <Space wrap>
                  <Tag>默认标签</Tag>
                  <Tag color="processing">进行中</Tag>
                  <Tag color="success">成功</Tag>
                  <Tag color="error">错误</Tag>
                  <Tag color="warning">警告</Tag>
                </Space>
              </div>

              <div>
                <Text strong>面包屑：</Text>
                <Breadcrumb
                  items={[
                    { title: <HomeOutlined /> },
                    { title: "首页" },
                    { title: "主题展示" },
                  ]}
                />
              </div>
            </Space>
          </Card>

          <Card title="表格" size="small">
            <Table dataSource={tableData} columns={tableColumns} size="small" />
          </Card>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          background: "linear-gradient(135deg, #f97316 0%, #fb923c 100%)",
          padding: "40px 24px",
          borderRadius: "12px",
          marginBottom: "24px",
          color: "white",
        }}
      >
        <Title level={1} style={{ color: "white", margin: 0 }}>
          橙色主题展示
        </Title>
        <Paragraph
          style={{
            color: "rgba(255,255,255,0.9)",
            fontSize: "16px",
            marginBottom: 0,
          }}
        >
          这是一个完整的 Ant Design
          橙色浅色系主题展示页面，包含了各种常用组件的样式配置。
        </Paragraph>
      </div>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card title="表单控件" size="small">
            <Form layout="vertical">
              <Form.Item label="开关控件">
                <Switch
                  checked={switchValue}
                  onChange={setSwitchValue}
                  checkedChildren="开"
                  unCheckedChildren="关"
                />
              </Form.Item>

              <Form.Item label="单选框">
                <Radio.Group
                  value={radioValue}
                  onChange={(e) => setRadioValue(e.target.value)}
                >
                  <Radio value={1}>选项A</Radio>
                  <Radio value={2}>选项B</Radio>
                  <Radio value={3}>选项C</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item label="复选框">
                <Checkbox
                  checked={checkboxValue}
                  onChange={(e) => setCheckboxValue(e.target.checked)}
                >
                  我同意服务条款
                </Checkbox>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="颜色展示" size="small">
            <Space direction="vertical" style={{ width: "100%" }}>
              <div>
                <Text strong>主色调：</Text>
                <div
                  style={{
                    display: "flex",
                    gap: 8,
                    marginTop: 8,
                    flexWrap: "wrap",
                  }}
                >
                  {[
                    { shade: 50, color: "#fff7ed" },
                    { shade: 100, color: "#ffedd5" },
                    { shade: 200, color: "#fed7aa" },
                    { shade: 300, color: "#fdba74" },
                    { shade: 400, color: "#fb923c" },
                    { shade: 500, color: "#f97316" },
                    { shade: 600, color: "#ea580c" },
                    { shade: 700, color: "#c2410c" },
                    { shade: 800, color: "#9a3412" },
                    { shade: 900, color: "#7c2d12" },
                  ].map(({ shade, color }) => (
                    <div
                      key={shade}
                      style={{
                        width: 24,
                        height: 24,
                        backgroundColor: color,
                        borderRadius: 4,
                        border: "1px solid #e5e7eb",
                        cursor: "pointer",
                        position: "relative",
                      }}
                      title={`Orange ${shade}: ${color}`}
                    />
                  ))}
                </div>
              </div>

              <div>
                <Text strong>功能色：</Text>
                <Space wrap style={{ marginTop: 8 }}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "#10b981",
                        borderRadius: 4,
                      }}
                    />
                    <Text>成功</Text>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "#f59e0b",
                        borderRadius: 4,
                      }}
                    />
                    <Text>警告</Text>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "#ef4444",
                        borderRadius: 4,
                      }}
                    />
                    <Text>错误</Text>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        backgroundColor: "#3b82f6",
                        borderRadius: 4,
                      }}
                    />
                    <Text>信息</Text>
                  </div>
                </Space>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>

      <Card title="组件展示" style={{ marginTop: 16 }}>
        <Tabs items={tabItems} />
      </Card>

      <Modal
        title="橙色主题模态框"
        open={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        okText="确定"
        cancelText="取消"
      >
        <p>这是一个使用橙色主题的模态框示例。</p>
        <p>主题配置已经应用到所有的 Ant Design 组件上。</p>
        <p>您可以在这个页面看到各种组件在橙色主题下的表现效果。</p>
      </Modal>
    </div>
  );
};

export default ThemePage;
