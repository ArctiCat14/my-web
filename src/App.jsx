import { useState, useEffect } from "react";
import { Typography } from "antd";
import { ConfigProvider } from "antd";
import { theme } from "antd";
import { Layout } from "antd";
import { Space, Button, Switch, FloatButton, Flex } from "antd";
import { Col, Row } from "antd";
import { BulbOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

const { Title, Text } = Typography;
const { Header, Content, Footer } = Layout;

function App() {
    const [isDarkMode, setIsDarkMode] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches,
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const handleChange = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const {
        token: { borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <ConfigProvider
                theme={{
                    algorithm: theme.darkAlgorithm,
                }}
            >
                <Header
                    style={{
                        backgroundColor: isDarkMode ? "#000000" : "#202020",
                        transition: "background-color 0.3s ease",
                    }}
                >
                    <Row>
                        <Col flex={31}>
                            <div
                                style={{
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                    color: "#dddddd",
                                }}
                            >
                                Nothing's Website
                            </div>
                        </Col>
                        <Col flex={1}>
                            <Button
                                icon={<BulbOutlined />}
                                onClick={() => setIsDarkMode(!isDarkMode)}
                            />
                        </Col>
                    </Row>
                </Header>
            </ConfigProvider>
            <ConfigProvider
                theme={{
                    algorithm: isDarkMode
                        ? theme.darkAlgorithm
                        : theme.defaultAlgorithm,
                }}
            >
                <Content
                    style={{
                        padding: "20px",
                        backgroundColor: isDarkMode ? "#303030" : "#ffffff",
                        transition: "background-color 0.3s ease",
                    }}
                >
                    <Flex
                        style={{
                            textAlign: "center",
                            padding: " 20px 120px 480px 20px",
                        }}
                        gap="middle"
                        align="start"
                        vertical
                    >
                        <Title
                            style={{
                                margin: "0px",
                                fontSize: "64px",
                                fontWeight: "bold",
                            }}
                        >
                            What can i say.
                        </Title>
                        <Title
                            style={{
                                marginTop: "0px",
                            }}
                            level={2}
                            type="secondary"
                        >
                            mamba out
                        </Title>
                        <Flex gap="small" wrap>
                            <Button type="primary">Man</Button>
                            <Button>What can i say</Button>
                        </Flex>
                    </Flex>
                </Content>
            </ConfigProvider>
            <Footer
                style={{
                    textAlign: "center",
                    backgroundColor: isDarkMode ? "#000000" : "#202020",
                    transition: "background-color 0.3s ease",
                }}
            ></Footer>
        </Layout>
    );
}

export default App;
