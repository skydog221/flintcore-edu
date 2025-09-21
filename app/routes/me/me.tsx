import React, { useEffect, useState } from "react";
import { AntDesignOutlined, FormOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Layout,
  Menu,
  theme,
  Divider,
  Avatar,
  Flex,
  Button,
  List,
  Skeleton,
  Card,
} from "antd";
import { useRestHeight } from "./../../hooks/useRestHeight";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [avatar, setAvatar] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const restHeight = useRestHeight();

  // 文章列表相关状态
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [articleIds, setArticleIds] = useState<string[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const PAGE_SIZE = 8;

  // 获取用户头像
  useEffect(() => {
    fetch("/api/user/getinfo", { method: "POST", credentials: "include" }).then(
      (res) => {
        const _res = res.json();
        _res.then((data) => {
          setAvatar(data.data.avatar || "");
          setUsername(data.data.username || "");
        });
      }
    );
  }, []);

  // 获取用户文章ID列表
  const fetchUserArticleIds = (currentPage: number) => {
    return fetch("/api/user/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page: currentPage, limit: PAGE_SIZE }),
      credentials: "include",
    }).then((res) => res.json());
  };

  // 获取文章详细信息
  const fetchArticleDetails = (uuid: string) => {
    return fetch("/api/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uuid }),
      credentials: "include",
    }).then((res) => res.json());
  };

  // 初始化加载文章列表
  useEffect(() => {
    fetchUserArticleIds(page).then((res) => {
      if (res.success && res.data) {
        setArticleIds(res.data);
        setInitLoading(false);

        // 获取每篇文章的详细信息
        res.data.forEach((uuid: string) => {
          fetchArticleDetails(uuid).then((articleData) => {
            if (articleData.success && articleData.data) {
              setArticles((prev) => {
                const exists = prev.some(
                  (article) => article.uuid === articleData.data.uuid
                );
                if (!exists) {
                  return [...prev, articleData.data];
                }
                return prev;
              });
            }
          });
        });

        // 检查是否还有更多文章
        setHasMore(res.data.length >= PAGE_SIZE);
      }
    });
  }, []);

  // 加载更多文章
  const onLoadMore = () => {
    setLoading(true);
    const nextPage = page + 1;
    setPage(nextPage);

    fetchUserArticleIds(nextPage).then((res) => {
      if (res.success && res.data) {
        setArticleIds((prev) => [...prev, ...res.data]);

        // 获取新增文章的详细信息
        res.data.forEach((uuid: string) => {
          fetchArticleDetails(uuid).then((articleData) => {
            if (articleData.success && articleData.data) {
              setArticles((prev) => {
                const exists = prev.some(
                  (article) => article.uuid === articleData.data.uuid
                );
                if (!exists) {
                  return [...prev, articleData.data];
                }
                return prev;
              });
            }
          });
        });

        // 检查是否还有更多文章
        setHasMore(res.data.length >= PAGE_SIZE);
        setLoading(false);
      }
    });
  };

  const loadMore =
    !initLoading && hasMore ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 10,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore} loading={loading}>
          加载更多
        </Button>
      </div>
    ) : null;
  return (
    <>
      <Layout
        hasSider
        style={{
          height: `calc(100vh - ${restHeight}px - 1em)`,
          width: "100%",
          padding: "1em",
        }}
      >
        {/* 左侧栏 */}
        <Content
          style={{
            width: "30%",
            display: "flex",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto",
          }}
        >
          <div
            style={{
              margin: "30% auto auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Avatar
              size={90}
              icon={
                avatar === "" ? <AntDesignOutlined /> : <img src={avatar} />
              }
            />
            <br />
            <p
              style={{
                width: "100%",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {username}
            </p>

            <br />
            <Button
              style={{ marginTop: "10px", width: "100%" }}
              type="primary"
              icon={<FormOutlined />}
            >
              开始创作
            </Button>
          </div>
        </Content>
        <Divider type="vertical" />
        {/* 内容 */}
        <Content
          style={{
            width: "100%",

            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: "auto",
          }}
        >
          <style>{`
            /* 隐藏滚动条 */
            ::-webkit-scrollbar {
              width: 0px;
              height: 0px;
              display: none;
            }
            
            ::-webkit-scrollbar-track {
              display: none;
            }
            
            ::-webkit-scrollbar-thumb {
              display: none;
            }
            
            /* 隐藏IE和Edge的滚动条 */
            -ms-overflow-style: none;
            
            /* 隐藏Firefox的滚动条 */
            scrollbar-width: none;
          `}</style>
          <List
            loading={initLoading}
            itemLayout="vertical"
            loadMore={loadMore}
            dataSource={articles}
            renderItem={(item) => (
              <List.Item
                key={item.uuid}
                style={{ marginRight: 8, marginLeft: 8 }}
              >
                <Skeleton avatar title={false} loading={false} active>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <a
                        href={`/article/${item.uuid}`}
                        style={{
                          fontWeight: 500,
                          color: "#000000",
                          textDecoration: "none",
                        }}
                      >
                        {item.title}
                      </a>
                    </div>
                    <div>
                      <a
                        key="list-loadmore-edit"
                        href={`/edit/${item.uuid}`}
                        style={{ marginRight: 12 }}
                      >
                        编辑
                      </a>
                      <a
                        key="list-loadmore-more"
                        href={`/article/${item.uuid}`}
                      >
                        查看
                      </a>
                    </div>
                  </div>
                </Skeleton>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </>
  );
};

export default App;
