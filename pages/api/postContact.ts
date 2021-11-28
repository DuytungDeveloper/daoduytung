// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
type Data = {
  success: Boolean,
  message?: string
}

const DateToString = function (date: Date, options?: any) {
  let defaultOption = {
    type: "vn",
    commas: "-",
    full: true
  }
  options = { ...defaultOption, ...options };
  date = new Date(date);
  let hour = date.getHours().toString().padStart(2, "0");
  let min = date.getMinutes().toString().padStart(2, "0");
  let sec = date.getSeconds().toString().padStart(2, "0");
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  switch (options.type) {
    case "us": {
      if (options.full) {
        // return `${year}${options.commas}${month}${options.commas}${day} ${hour}:${min}:${sec}`;
        return year + options.commas + month + options.commas + day + " " + hour + ":" + min + ":" + sec;
      } else {
        // return `${year}${options.commas}${month}${options.commas}${day}`;
        return year + options.commas + month + options.commas + day;
      }
      break;
    }
    default: {
      if (options.full) {
        // return `${day}${options.commas}${month}${options.commas}${year} ${hour}:${min}:${sec}`;
        return day + options.commas + month + options.commas + year + " " + hour + ":" + min + ":" + sec;
      } else {
        // return `${day}${options.commas}${month}${options.commas}${year}`;
        return day + options.commas + month + options.commas + year;
      }
      break;
    }
  }
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let result: Data = {
    success: false
  };
  if (req.method?.toLocaleLowerCase() != "post") {
    result.message = "Bạn đang làm gì vậy?";
    return res.status(200).json(result);
  } else {
    let data = req.body;
    if (!data) {
      result.message = "Bạn đang làm gì vậy?";
      return res.status(200).json(result);
    } else {
      // console.log(req.body)
      if (!data.fullName || !data.email || !data.subject || !data.message || !data.token) {
        result.message = "Bạn đang làm gì vậy?";
        return res.status(200).json(result);
      }
      //#region  Check Capcha
      let secret_key = '6Lewe2UdAAAAAJJsgmfRCmApJO0Oo-t7kPwiiEqH';
      const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret_key}&response=${data.token}`;
      try {
        let responseGoogle = await axios.post(url);
        if (!responseGoogle.data.success || responseGoogle.data.score < 0.7) {
          result.message = "Capcha không đạt yêu cầu!";
          return res.status(200).json(result);
        }
      } catch (e) {
        result.message = "Đường truyền mạng bị gián đoạn khi kiểm tra Capcha!";
        return res.status(200).json(result);
      }
      //#endregion
      try {
        let urlSlack = 'https://hooks.slack.com/services/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';
        let message = `Ngày : ${DateToString(new Date)} \nKhách hàng : ${data.fullName} \nEmail khách : ${data.email.toString()} \nTiêu đề : ${data.subject} \nNội dung : ${data.message}`;

        let rs = await axios.post(urlSlack,
          {
            text: message
          },
          {
            headers: {
              'Accept': '*/*',
              'Content-Type': 'application/json',
              'User-Agent': ""
            }
          }
        );
        if (rs.data == "ok") {
          result.success = true;
        }
      } catch (e) {
        console.log(e)
        result.message = "Đường truyền mạng bị gián đoạn khi lưu thông tin của bạn!<br/>Vui lòng gọi trực tiếp hoặc liên hệ qua Zalo để có thể liên lạc trực tiếp <3";
        return res.status(200).json(result);
      }
    }
  }
  return res.status(200).json(result);
}
