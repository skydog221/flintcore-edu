import React, { type ReactNode } from "react";
import { Card } from "antd";
interface AritcleListProps {
  title: string;
  content: ReactNode;
}
export const AritcleList = (props: AritcleListProps) => {
  return (
    <>
      <Card style={{ marginTop: 16 }} type="inner" title={props.title}>
        {props.content}
      </Card>
    </>
  );
};
