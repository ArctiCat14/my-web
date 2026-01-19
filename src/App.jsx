import { useState, useEffect } from "react";
import { Typography } from "antd";
import { ConfigProvider } from "antd";
import { theme } from "antd";
import { Space, Button, Switch, FloatButton } from "antd";
import { BulbOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

const { Title, Text } = Typography;

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

    return (
        <ConfigProvider
            theme={{
                algorithm: isDarkMode
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
            }}
        >
            <div
                style={{
                    padding: "20px",
                    maxWidth: "device-width",
                    margin: "0 auto",
                    minHeight: "100vh",
                    backgroundColor: isDarkMode ? "#303030" : "#dddddd",
                    color: isDarkMode ? "#dddddd" : "#303030",
                    transition: "background-color 0.35s ease",
                }}
            >
                <Space align="center" style={{ marginBottom: "20px" }}>
                    <Button
                        icon={<BulbOutlined />}
                        onClick={() => setIsDarkMode(!isDarkMode)}
                    />
                </Space>
            </div>
        </ConfigProvider>
    );
}

export default App;
