import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios({
      url: "https://iablikcamuku.sealoshzh.site/api/v1/auth/login",
      method: "post",
      params: req.body,
      headers: {
        Cookie: "xxxxx",
      },
    });
    // 透传响应头和状态码
    res.status(response.status);
    Object.entries(response.headers).forEach(([key, value]) => {
      res.setHeader(key, value);
    });

    res.json(response.data); // 关键：返回数据给客户端
  } catch (err) {
    console.log(err);

    res.status(500).send(err.response.data);
  }
}
