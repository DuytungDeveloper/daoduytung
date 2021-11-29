import { useEffect, useMemo, useState } from 'react'
import type { ReactElement } from 'react'
import ResumeLayout from '../../components/layouts/resume/layouts';
import Spinner from '../../components/spinners/default_spinner';
import AutoCloseSpinner from '../../components/spinners/AutoCloseSpinner';
import { useTranslation, Trans } from 'react-i18next';
function shuffle(array: Array<any>) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getAllListData() {
  //#region Cao Thắng
  let listCaoThang = [
    { title: 'Giải thưởng đầu tay :))', url: '', key: 'Cao Thắng' },
    { title: 'Tham quan công ty DEK Technologies 1', url: '', urlMini: '', key: 'Cao Thắng' },
    { title: 'Tham quan công ty DEK Technologies 2', url: '', urlMini: '', key: 'Cao Thắng' },
    { title: 'Tham quan công ty DEK Technologies 3', url: '', urlMini: '', key: 'Cao Thắng' },
    { title: 'Tham quan công ty DEK Technologies 4', url: '', urlMini: '', key: 'Cao Thắng', },
    { title: 'Tham quan công ty DEK Technologies 5', url: '', urlMini: '', key: 'Cao Thắng' },
    { title: 'Tham gia các hoạt động của trường', url: '', urlMini: '', key: 'Cao Thắng' },
    { title: 'Lớp học', url: '', urlMini: '', key: 'Cao Thắng' },
    { title: 'Lớp học', url: '', urlMini: '', key: 'Cao Thắng' },
  ]
  listCaoThang = listCaoThang.map((x, i) => {
    x.url = `/assets/img/portfolio/School/${i + 1}.jpg`;
    x.urlMini = `/assets/img/portfolio/School/Mini/${i + 1}.jpg`;
    return x;
  })
  //#endregion
  //#region Ryomo
  let listRyomo = [
    { title: 'Giấy chứng nhận thực tập ở công ty', urlMini: '', url: '', key: 'Ryomo' },
    { title: 'Ảnh công ty', urlMini: '', url: '', key: 'Ryomo' },
    { title: 'Nhóm thực tập công ty Ryomo', urlMini: '', url: '', key: 'Ryomo' },
  ]
  listRyomo = listRyomo.map((x, i) => {
    x.url = `/assets/img/portfolio/Ryomo/${i + 1}.jpg`;
    x.urlMini = `/assets/img/portfolio/Ryomo/Mini/${i + 1}.jpg`;
    return x;
  })
  //#endregion
  //#region Dirox
  let listDirox = [
    { title: 'Tập trung nghe thông báo từ giám đốc', urlMini: '', url: '', key: 'Dirox' },
    { title: 'Góc làm việc ở công ty', urlMini: '', url: '', key: 'Dirox' },
    { title: 'Các đồng nghiệp nước ngoài', urlMini: '', url: '', key: 'Dirox' },
  ]
  listDirox = listDirox.map((x, i) => {
    x.url = `/assets/img/portfolio/Dirox/${i + 1}.jpg`;
    x.urlMini = `/assets/img/portfolio/Dirox/Mini/${i + 1}.jpg`;
    return x;
  })
  //#endregion
  //#region Vihat
  let listVihat = [
    { title: 'Góc làm việc công ty VIHAT', urlMini: '', url: '', key: 'Vihat' },
    { title: 'Tham dự các chương trình quay thưởng , GiveAway của công ty và ban lãnh đạo VIHAT', urlMini: '', url: '', key: 'Vihat' },
    { title: 'Trang trí công ty VIHAT các dịp đặc biệt', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Biểu diễn đêm hội vui chơi ở VIHAT', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Tham gia các hoạt động ngoài trời của công ty VIHAT', url: '', urlMini: '', key: 'Vihat' },

    { title: 'Company Trip của công ty VIHAT 1', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 2', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 3', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 4', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 5', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 6', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 7', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 8', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 9', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 10', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 11', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 12', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 13', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 14', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 16', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 17', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 18', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 19', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 20', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 21', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Company Trip của công ty VIHAT 22', url: '', urlMini: '', key: 'Vihat' },

    { title: 'Hoạt động đội nhóm công ty VIHAT', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Tham gia lễ cưới quản lý cùng người yêu ở công ty VIHAT', url: '', key: 'Vihat' },

    { title: 'Tham gia Party cuối năm ở công ty VIHAT 1', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Tham gia Party cuối năm ở công ty VIHAT 2', url: '', urlMini: '', key: 'Vihat' },


    { title: 'Work From Home khi dịch Covid ập tới', url: '', urlMini: '', key: 'Vihat' },

    { title: 'Làm việc lại tại văn phòng công ty VIHAT sau đợt dịch 2021 vào tháng 10 1', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Làm việc lại tại văn phòng công ty VIHAT sau đợt dịch 2021 vào tháng 10 2', url: '', urlMini: '', key: 'Vihat' },

    { title: 'Công ty tổ chức chúc mừng sinh nhật cho nhân viên và kèm theo quà chúc sinh nhật (Chuyển khoản)', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Ban lãnh đạo và giám đốc gọi điện chúc mừng sinh nhật cho nhân viên', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Bộ test Covid công ty VIHAT gửi trước khi lên công ty chính thức', url: '', urlMini: '', key: 'Vihat' },

    { title: 'Hệ thống website TOPUP', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Hệ thống tin nhắn eSMS', url: '', urlMini: '', key: 'Vihat' },
    { title: 'Phần mềm quản lý TOPUP (Electron+ReactJS)', url: '', urlMini: '', key: 'Vihat' },

    { title: 'Biểu diễn văn nghệ', type: "video", url: 'https://www.youtube.com/embed/qcMOBSdt-nE', urlMini: 'assets/img/portfolio/Vihat/Mini/4.jpg', key: 'Vihat' },
  ]
  listVihat = listVihat.map((x, i) => {
    if (!x.type) {
      x.url = `/assets/img/portfolio/Vihat/${i + 1}.jpg`;
      x.urlMini = `/assets/img/portfolio/Vihat/Mini/${i + 1}.jpg`;
    }
    return x;
  })
  //#endregion
  //#region Hobby
  let listHobby = [
    { title: 'Giao lưu guitar ở công viên', url: '', urlMini: '', key: 'Hobby' },
    { title: 'Giao lưu ban nhạc', url: '', urlMini: '', key: 'Hobby' },
    { title: 'Game giải trí', url: '', urlMini: '', key: 'Hobby' },
    { title: 'Game giải trí', url: '', urlMini: '', key: 'Hobby' },
  ]
  listHobby = listHobby.map((x, i) => {
    x.url = `/assets/img/portfolio/Hobby/${i + 1}.jpg`;
    x.urlMini = `/assets/img/portfolio/Hobby/Mini/${i + 1}.jpg`;
    return x;
  })
  //#endregion

  // let listAll = [
  //   ...listVihat,
  //   ...listDirox,
  //   ...listRyomo,
  //   ...listCaoThang,
  //   ...listHobby,
  // ]
  // console.log(JSON.stringify(listAll));
  let listAll = [{
    "title": "Góc làm việc công ty VIHAT",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/1.jpg",
    "url": "/assets/img/portfolio/Vihat/1.jpg",
    "key": "Vihat"
  }, {
    "title": "Tham dự các chương trình quay thưởng , GiveAway của công ty và ban lãnh đạo VIHAT",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/2.jpg",
    "url": "/assets/img/portfolio/Vihat/2.jpg",
    "key": "Vihat"
  }, {
    "title": "Trang trí công ty VIHAT các dịp đặc biệt",
    "url": "/assets/img/portfolio/Vihat/3.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/3.jpg",
    "key": "Vihat"
  }, {
    "title": "Biểu diễn đêm hội vui chơi ở VIHAT",
    "url": "/assets/img/portfolio/Vihat/4.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/4.jpg",
    "key": "Vihat"
  }, {
    "title": "Tham gia các hoạt động ngoài trời của công ty VIHAT",
    "url": "/assets/img/portfolio/Vihat/5.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/5.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 1",
    "url": "/assets/img/portfolio/Vihat/6.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/6.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 2",
    "url": "/assets/img/portfolio/Vihat/7.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/7.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 3",
    "url": "/assets/img/portfolio/Vihat/8.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/8.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 4",
    "url": "/assets/img/portfolio/Vihat/9.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/9.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 5",
    "url": "/assets/img/portfolio/Vihat/10.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/10.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 6",
    "url": "/assets/img/portfolio/Vihat/11.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/11.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 7",
    "url": "/assets/img/portfolio/Vihat/12.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/12.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 8",
    "url": "/assets/img/portfolio/Vihat/13.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/13.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 9",
    "url": "/assets/img/portfolio/Vihat/14.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/14.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 10",
    "url": "/assets/img/portfolio/Vihat/15.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/15.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 11",
    "url": "/assets/img/portfolio/Vihat/16.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/16.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 12",
    "url": "/assets/img/portfolio/Vihat/17.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/17.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 13",
    "url": "/assets/img/portfolio/Vihat/18.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/18.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 14",
    "url": "/assets/img/portfolio/Vihat/19.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/19.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 16",
    "url": "/assets/img/portfolio/Vihat/20.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/20.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 17",
    "url": "/assets/img/portfolio/Vihat/21.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/21.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 18",
    "url": "/assets/img/portfolio/Vihat/22.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/22.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 19",
    "url": "/assets/img/portfolio/Vihat/23.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/23.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 20",
    "url": "/assets/img/portfolio/Vihat/24.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/24.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 21",
    "url": "/assets/img/portfolio/Vihat/25.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/25.jpg",
    "key": "Vihat"
  }, {
    "title": "Company Trip của công ty VIHAT 22",
    "url": "/assets/img/portfolio/Vihat/26.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/26.jpg",
    "key": "Vihat"
  }, {
    "title": "Hoạt động đội nhóm công ty VIHAT",
    "url": "/assets/img/portfolio/Vihat/27.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/27.jpg",
    "key": "Vihat"
  }, {
    "title": "Tham gia lễ cưới quản lý cùng người yêu ở công ty VIHAT",
    "url": "/assets/img/portfolio/Vihat/28.jpg",
    "key": "Vihat",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/28.jpg"
  }, {
    "title": "Tham gia Party cuối năm ở công ty VIHAT 1",
    "url": "/assets/img/portfolio/Vihat/29.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/29.jpg",
    "key": "Vihat"
  }, {
    "title": "Tham gia Party cuối năm ở công ty VIHAT 2",
    "url": "/assets/img/portfolio/Vihat/30.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/30.jpg",
    "key": "Vihat"
  }, {
    "title": "Work From Home khi dịch Covid ập tới",
    "url": "/assets/img/portfolio/Vihat/31.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/31.jpg",
    "key": "Vihat"
  }, {
    "title": "Làm việc lại tại văn phòng công ty VIHAT sau đợt dịch 2021 vào tháng 10 1",
    "url": "/assets/img/portfolio/Vihat/32.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/32.jpg",
    "key": "Vihat"
  }, {
    "title": "Làm việc lại tại văn phòng công ty VIHAT sau đợt dịch 2021 vào tháng 10 2",
    "url": "/assets/img/portfolio/Vihat/33.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/33.jpg",
    "key": "Vihat"
  }, {
    "title": "Công ty tổ chức chúc mừng sinh nhật cho nhân viên và kèm theo quà chúc sinh nhật (Chuyển khoản)",
    "url": "/assets/img/portfolio/Vihat/34.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/34.jpg",
    "key": "Vihat"
  }, {
    "title": "Ban lãnh đạo và giám đốc gọi điện chúc mừng sinh nhật cho nhân viên",
    "url": "/assets/img/portfolio/Vihat/35.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/35.jpg",
    "key": "Vihat"
  }, {
    "title": "Bộ test Covid công ty VIHAT gửi trước khi lên công ty chính thức",
    "url": "/assets/img/portfolio/Vihat/36.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/36.jpg",
    "key": "Vihat"
  }, {
    "title": "Hệ thống website TOPUP",
    "url": "/assets/img/portfolio/Vihat/37.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/37.jpg",
    "key": "Vihat"
  }, {
    "title": "Hệ thống tin nhắn eSMS",
    "url": "/assets/img/portfolio/Vihat/38.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/38.jpg",
    "key": "Vihat"
  }, {
    "title": "Phần mềm quản lý TOPUP (Electron+ReactJS)",
    "url": "/assets/img/portfolio/Vihat/39.jpg",
    "urlMini": "/assets/img/portfolio/Vihat/Mini/39.jpg",
    "key": "Vihat"
  }, {
    "title": "Biểu diễn văn nghệ",
    "type": "video",
    "url": "https://www.youtube.com/embed/qcMOBSdt-nE",
    "urlMini": "assets/img/portfolio/Vihat/Mini/4.jpg",
    "key": "Vihat"
  }, {
    "title": "Tập trung nghe thông báo từ giám đốc",
    "urlMini": "/assets/img/portfolio/Dirox/Mini/1.jpg",
    "url": "/assets/img/portfolio/Dirox/1.jpg",
    "key": "Dirox"
  }, {
    "title": "Góc làm việc ở công ty",
    "urlMini": "/assets/img/portfolio/Dirox/Mini/2.jpg",
    "url": "/assets/img/portfolio/Dirox/2.jpg",
    "key": "Dirox"
  }, {
    "title": "Các đồng nghiệp nước ngoài",
    "urlMini": "/assets/img/portfolio/Dirox/Mini/3.jpg",
    "url": "/assets/img/portfolio/Dirox/3.jpg",
    "key": "Dirox"
  }, {
    "title": "Giấy chứng nhận thực tập ở công ty",
    "urlMini": "/assets/img/portfolio/Ryomo/Mini/1.jpg",
    "url": "/assets/img/portfolio/Ryomo/1.jpg",
    "key": "Ryomo"
  }, {
    "title": "Ảnh công ty",
    "urlMini": "/assets/img/portfolio/Ryomo/Mini/2.jpg",
    "url": "/assets/img/portfolio/Ryomo/2.jpg",
    "key": "Ryomo"
  }, {
    "title": "Nhóm thực tập công ty Ryomo",
    "urlMini": "/assets/img/portfolio/Ryomo/Mini/3.jpg",
    "url": "/assets/img/portfolio/Ryomo/3.jpg",
    "key": "Ryomo"
  }, {
    "title": "Giải thưởng đầu tay :))",
    "url": "/assets/img/portfolio/School/1.jpg",
    "key": "Cao Thắng",
    "urlMini": "/assets/img/portfolio/School/Mini/1.jpg"
  }, {
    "title": "Tham quan công ty DEK Technologies 1",
    "url": "/assets/img/portfolio/School/2.jpg",
    "urlMini": "/assets/img/portfolio/School/Mini/2.jpg",
    "key": "Cao Thắng"
  }, {
    "title": "Tham quan công ty DEK Technologies 2",
    "url": "/assets/img/portfolio/School/3.jpg",
    "urlMini": "/assets/img/portfolio/School/Mini/3.jpg",
    "key": "Cao Thắng"
  }, {
    "title": "Tham quan công ty DEK Technologies 3",
    "url": "/assets/img/portfolio/School/4.jpg",
    "urlMini": "/assets/img/portfolio/School/Mini/4.jpg",
    "key": "Cao Thắng"
  }, {
    "title": "Tham quan công ty DEK Technologies 4",
    "url": "/assets/img/portfolio/School/5.jpg",
    "urlMini": "/assets/img/portfolio/School/Mini/5.jpg",
    "key": "Cao Thắng"
  }, {
    "title": "Tham quan công ty DEK Technologies 5",
    "url": "/assets/img/portfolio/School/6.jpg",
    "urlMini": "/assets/img/portfolio/School/Mini/6.jpg",
    "key": "Cao Thắng"
  }, {
    "title": "Tham gia các hoạt động của trường",
    "url": "/assets/img/portfolio/School/7.jpg",
    "urlMini": "/assets/img/portfolio/School/Mini/7.jpg",
    "key": "Cao Thắng"
  }, {
    "title": "Lớp học",
    "url": "/assets/img/portfolio/School/8.jpg",
    "urlMini": "/assets/img/portfolio/School/Mini/8.jpg",
    "key": "Cao Thắng"
  }, {
    "title": "Lớp học",
    "url": "/assets/img/portfolio/School/9.jpg",
    "urlMini": "/assets/img/portfolio/School/Mini/9.jpg",
    "key": "Cao Thắng"
  }, {
    "title": "Giao lưu guitar ở công viên",
    "url": "/assets/img/portfolio/Hobby/1.jpg",
    "urlMini": "/assets/img/portfolio/Hobby/Mini/1.jpg",
    "key": "Hobby"
  }, {
    "title": "Giao lưu ban nhạc",
    "url": "/assets/img/portfolio/Hobby/2.jpg",
    "urlMini": "/assets/img/portfolio/Hobby/Mini/2.jpg",
    "key": "Hobby"
  }, {
    "title": "Game giải trí",
    "url": "/assets/img/portfolio/Hobby/3.jpg",
    "urlMini": "/assets/img/portfolio/Hobby/Mini/3.jpg",
    "key": "Hobby"
  }, {
    "title": "Game giải trí",
    "url": "/assets/img/portfolio/Hobby/4.jpg",
    "urlMini": "/assets/img/portfolio/Hobby/Mini/4.jpg",
    "key": "Hobby"
  }]

  // listAll = shuffle(listAll);
  //@ts-ignore
  let allCategory = [...new Set(listAll.map(x => x.key))];
  return {
    listAll,
    allCategory
  }
}

const AllView = (props: any) => {
  let listAllData = props.listAllData;
  return (
    <>
      {
        listAllData.map((x: any, i: any) => {
          return <DetailView x={x} key={i} />
        })
      }
    </>
  );
}

const DetailView = (props: any) => {
  let x = props.x;
  let type = x.type;
  let keyCa = `["category_all", "${x.key}"]`;
  if (!type) {
    return (
      <figure className="item lbimage" data-groups={keyCa}>
        <div className="portfolio-item-img">
          <img src={x.urlMini} alt={x.title} title={x.title} loading='lazy' />
          <a className="lightbox" title={x.title} href={x.url}></a>
        </div>

        {/* <i className="far fa-image"></i>
        <h4 className="name">{x.title}</h4>
        <span className="category">{x.key}</span> */}
      </figure>
    );

  } else {
    if (type == "video") {

      return <figure className="item lbvideo" data-groups={keyCa}>
        <div className="portfolio-item-img">
          <img src={x.urlMini} alt={x.title} title={x.title} loading='lazy' />
          <a href={x.url} className="lightbox mfp-iframe" title={x.title}></a>
        </div>
        {/* <i className="far fa-image"></i>
        <h4 className="name">{x.title}</h4>
        <span className="category">{x.key}</span> */}
      </figure>

    } else
      return <></>
  }
}
let datas = getAllListData().listAll;

const Home = () => {
  // let [showSpinner, setshowSpinner] = useState(true);
  const { t, i18n } = useTranslation();
  let [show, setShow] = useState(false);
  let listAllData = datas;
  listAllData = listAllData.map(x => {
    x.title = t(x.title);
    return x;
  })
  let allCategory = [
    "Vihat",
    "Dirox",
    "Ryomo",
    "Cao Thắng",
    "Hobby"
  ];

  useEffect(() => {
    // setTimeout(() => {
    //   //@ts-ignore
    //   LoadCaiHinh();
    // }, 1000);

    //@ts-ignore
    var $portfolio_container = $(".portfolio-grid");
    $portfolio_container.imagesLoaded(function () {
      // setshowSpinner(false);
      //@ts-ignore
      portfolio_init(this);
      setShow(true);
    });
    //@ts-ignore
    // animateValue(() => { setshowSpinner(false) })

    //@ts-ignore
    customScroll();
  }, [listAllData])
  return (
    <>
      <Spinner show={!show} />
      {/* <AutoCloseSpinner /> */}
      <section data-id="portfolio" className="animated-section ps ps--theme_default section-active" style={{ opacity: (show ? 1 : 0) }}>
        <div className="page-title">
          <h2><Trans i18nKey="menu.portfolio" /></h2>
        </div>

        <div className="section-content">

          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <div className="portfolio-content">

                <ul className="portfolio-filters">
                  <li className="active">
                    <a className="filter btn btn-sm btn-link" data-group="category_all">All</a>
                  </li>
                  {allCategory.map((x, i) => {
                    return <li key={i}>
                      <a className="filter btn btn-sm btn-link" data-group={x}>{x}</a>
                    </li>
                  })}
                </ul>

                <div className="portfolio-grid three-columns">
                  {/* 
                  {listAllData.map((x, i) => {
                    return <DetailView x={x} key={i} />
                  })} */}
                  <AllView listAllData={listAllData} />
                  {/* <figure className="item lbvideo" data-groups='["category_all", "Vihat"]'>
                    <div className="portfolio-item-img">
                      <img src="assets/img/portfolio/3.jpg" alt="Vimeo Video 1" title="" />
                      <a href="assets/img/portfolio/Vihat/Video.mp4" className="lightbox mfp-iframe" title="Vimeo Video 1"></a>
                    </div>
                  </figure> */}

                  {/* <figure className="item lbimage" data-groups='["category_all", "category_mockups"]'>
                    <div className="portfolio-item-img">
                      <img src="assets/img/portfolio/5.jpg" alt="Mockup Design 1" title="" />
                      <a className="lightbox" title="Mockup Design 1" href="assets/img/portfolio/full/5.jpg"></a>
                    </div>

                    <i className="far fa-image"></i>
                    <h4 className="name">Mockup Design 1</h4>
                    <span className="category">Mockups</span>
                  </figure>


                  <figure className="item lbaudio" data-groups='["category_all", "category_soundcloud"]'>
                    <div className="portfolio-item-img">
                      <img src="assets/img/portfolio/1.jpg" alt="SoundCloud Audio" title="" />
                      <a href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&#038;color=%23ff5500&#038;auto_play=false&#038;hide_related=false&#038;show_comments=true&#038;show_user=true&#038;show_reposts=false&#038;show_teaser=true&#038;visual=true" className="lightbox mfp-iframe" title="SoundCloud Audio"></a>
                    </div>

                    <i className="fa fa-volume-up"></i>
                    <h4 className="name">SoundCloud Audio</h4>
                    <span className="category">SoundCloud</span>
                  </figure>

                  <figure className="item standard" data-groups='["category_all", "category_detailed"]'>
                    <div className="portfolio-item-img">
                      <img src="assets/img/portfolio/2.jpg" alt="Media Project 2" title="" />
                      <a href="portfolio-1.html" className="ajax-page-load"></a>
                    </div>

                    <i className="far fa-file-alt"></i>
                    <h4 className="name">Detailed Project 2</h4>
                    <span className="category">Detailed</span>
                  </figure>

                  <figure className="item lbvideo" data-groups='["category_all", "category_vimeo-videos"]'>
                    <div className="portfolio-item-img">
                      <img src="assets/img/portfolio/3.jpg" alt="Vimeo Video 1" title="" />
                      <a href="https://player.vimeo.com/video/158284739" className="lightbox mfp-iframe" title="Vimeo Video 1"></a>
                    </div>

                    <i className="fas fa-video"></i>
                    <h4 className="name">Vimeo Video 1</h4>
                    <span className="category">Vimeo Videos</span>
                  </figure>

                  <figure className="item standard" data-groups='["category_all", "category_detailed"]'>
                    <div className="portfolio-item-img">
                      <img src="assets/img/portfolio/4.jpg" alt="Media Project 1" title="" />
                      <a href="portfolio-1.html" className="ajax-page-load"></a>
                    </div>

                    <i className="far fa-file-alt"></i>
                    <h4 className="name">Detailed Project 1</h4>
                    <span className="category">Detailed</span>
                  </figure>

                  <figure className="item lbimage" data-groups='["category_all", "category_mockups"]'>
                    <div className="portfolio-item-img">
                      <img src="assets/img/portfolio/5.jpg" alt="Mockup Design 1" title="" />
                      <a className="lightbox" title="Mockup Design 1" href="assets/img/portfolio/full/5.jpg"></a>
                    </div>

                    <i className="far fa-image"></i>
                    <h4 className="name">Mockup Design 1</h4>
                    <span className="category">Mockups</span>
                  </figure>

                  <figure className="item lbvideo" data-groups='["category_all", "category_youtube-videos"]'>
                    <div className="portfolio-item-img">
                      <img src="assets/img/portfolio/6.jpg" alt="YouTube Video 1" title="" />
                      <a href="https://www.youtube.com/embed/bg0gv2YpIok" className="lightbox mfp-iframe" title="YouTube Video 1"></a>
                    </div>

                    <i className="fas fa-video"></i>
                    <h4 className="name">YouTube Video 1</h4>
                    <span className="category">YouTube Videos</span>
                  </figure> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <ResumeLayout title={"Hoạt động và các dự án đã tham dự"} description="Thông tin các dự án và môi trường công ty đã làm việc">
      {page}
    </ResumeLayout>
  )
}