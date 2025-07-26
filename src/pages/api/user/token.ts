import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

function jsonToFormData(jsonObj, formData = new FormData()) {
  Object.keys(jsonObj).forEach((key) => {
    const value = jsonObj[key];
    if (value instanceof File) {
      formData.append(key, value);
    } else if (typeof value === "object" && value !== null) {
      // 处理嵌套对象（见下文）
    } else {
      formData.append(key, value);
    }
  });
  return formData;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const formData = jsonToFormData(req.body);
    const response = await axios({
      headers: { "Content-Type": "multipart/form-data" },
      url: "https://iablikcamuku.sealoshzh.site/api/v1/auth/token",
      method: "post",
      data: formData,
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
