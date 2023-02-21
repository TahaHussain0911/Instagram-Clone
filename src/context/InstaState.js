import React, { useState } from "react";
import InstaContext from "./InstaContext";
import amas from '../Profileimages/amas.jpg'
import faiq from '../Profileimages/faiq.jpg'
import fouz from '../Profileimages/fouz.jpg'
import noor from '../Profileimages/noor.jpg'
import rabi from '../Profileimages/rabi.jpg'
import saad from '../Profileimages/saad.jpg'
import hamza from '../Profileimages/hamza.jpg'
import wahab from '../Profileimages/wahab.jpg'
import ukasha from '../Profileimages/ukasha.jpg'
import qamber from '../Profileimages/qamber.jpg'
import junaid from '../Profileimages/junaid.jpg'
import aman from '../Profileimages/aman.jpg'
import talha from '../Profileimages/talha.jpg'
import azam from '../Profileimages/azam.jpg'
import farooq from '../Profileimages/farooq.jpg'
import fakhir from '../Profileimages/fakhir.jpg'


const InstaState = (props) => {
  const [name, setname] = useState("");
  const [background, setbackground] = useState([]);
  const [follow, setfollow] = useState([]);
  const [liked, setliked] = useState([])
  const users = [
    {
      id: 1,
      name: "qambaralee",
      image: qamber,
      stories: [
        {
          story:
            "https://tse2.mm.bing.net/th?id=OIP.asbNSgfjZumT0167BcFQWAHaEo&pid=Api&P=0",
          posted: "Posted 1h Ago",
        },
        {
          story:
            qamber,
          posted: "Posted 3h Ago",
        },
      ],
    },
    {
      id: 2,
      name: "rabi_ahmed8",
      image:
        rabi,
      stories: [
        {
          story:
            "https://tse1.mm.bing.net/th?id=OIP.8DUf0VcYb5hm87DqE2MCewHaKn&pid=Api&P=0",
          posted: "Posted 23m Ago",
        },
        {
          story:
            "https://tse4.mm.bing.net/th?id=OIP.WORJMeUdv7qq0G0VzU2WgAHaJQ&pid=Api&P=0",
          posted: "Posted 12h Ago",
        },
      ],
    },
    {
      id: 3,
      name: "noor.shiekh.184",
      image:
        noor,
      stories: [
        {
          story:
            "https://tse4.mm.bing.net/th?id=OIP.kVKBpYo814eoF24J-TzdcQHaEK&pid=Api&P=0",
          posted: "Posted 23m Ago",
        },
      ],
    },
    {
      id: 4,
      name: "afianaeem89",
      image:
        "https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-9/182786803_2934993793486125_7209103003797421597_n.jpg?stp=dst-jpg_p720x720&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHj2TdiDYt4OpeXKPvS2FcocLutnQymkNhwu62dDKaQ2E8dFGlyWAmkYWLqo2KfQY1FmAtPB64rBb9lAQROLhZy&_nc_ohc=kYGIO_HiYtoAX8P4-BG&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfCdlDTd2jgHkv2BL_VVWrX3lCgd8-K02A3oMJHRofjARw&oe=6415483C",
      stories: [
        {
          story:
            "https://tse4.mm.bing.net/th?id=OIP.jVhj3o9Y37r3libCCAS45AHaLH&pid=Api&P=0",
          posted: "Posted 50m Ago",
        },
      ],
    },
    {
      id: 5,
      name: "amas_waseem",
      image:
        amas,
      stories: [
        {
          story:
            "https://tse2.mm.bing.net/th?id=OIP.qQykX0h6uF-Uy9Nt_LoQvQHaJQ&pid=Api&P=0",
          posted: "Posted 10m Ago",
        },
      ],
    },
    {
      id: 6,
      name: "ukasha_alam_sidd",
      image:
        ukasha,
      stories: [
        {
          story:
            "https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-9/73524663_2351275411841949_2095051119520404045_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEvrEchKYYh8DkViyVe6QgZ2nZtR3SJPo_adm1HdIk-j8RJ0LWDOfuqIIPYo45KFMXoWkFi3SODdj_MYdVMlysq&_nc_ohc=4l-i4wn51lIAX8cl9KH&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfBAOgyQoKOr8hYdHjCTm9IGKrhkWh8FIxzwovc5MqkDeg&oe=6416BCCA",
          posted: "Posted 15 Ago",
        },
      ],
    },
    {
      id: 7,
      name: "_fouz.74",
      image:
        fouz,
      stories: [
        {
          story:
            "https://tse2.mm.bing.net/th?id=OIP.4cYaN1hG3Zzyk1iyCeDK5gHaLH&pid=Api&P=0",
          posted: "Posted 17m Ago",
        },
        {
          story:
            "https://tse2.mm.bing.net/th?id=OIP.hzwtk7xoNaGH3yQAhWhJIwHaJQ&pid=Api&P=0",
          posted: "Posted 7h Ago",
        },
      ],
    },
    {
      id: 8,
      name: "junaidlaiq",
      image:
        junaid,
      stories: [
        {
          story:
            "https://tse3.mm.bing.net/th?id=OIP.mb_YxruiPw1RPHMVtwbOgAHaJQ&pid=Api&P=0",
          posted: "Posted 1h Ago",
        },
      ],
    },
    {
      id: 9,
      name: "aman_khan044",
      image:
        aman,
      stories: [
        {
          story:
            "https://tse4.mm.bing.net/th?id=OIP.Ex-xsrfoko1068Rlk-yGCgHaLG&pid=Api&P=0",
          posted: "Posted 30m Ago",
        },
        {
          story:
            "https://tse1.mm.bing.net/th?id=OIP.IYsUZd0KhRgvnDe4ilYYlAHaJ4&pid=Api&P=0",
          posted: "Posted 3h Ago",
        },
      ],
    },
    {
      id: 10,
      name: "_saadshariq_",
      image:
        saad,
      stories: [
        {
          story:
            "https://tse4.mm.bing.net/th?id=OIP.jVhj3o9Y37r3libCCAS45AHaLH&pid=Api&P=0",
          posted: "Posted 50m Ago",
        },
      ],
    },
    {
      id: 11,
      name: "syedwahab1",
      image:
        wahab,
      stories: [
        {
          story:
            "https://tse4.mm.bing.net/th?id=OIP.uEKRAgrjTCsDqzu768ip1wHaE8&pid=Api&P=0",
          posted: "Posted 18h Ago",
        },
      ],
    },
    {
      id: 12,
      name: "faiq.umer",
      image:
        faiq,
      stories: [
        {
          story:
            "https://tse4.mm.bing.net/th?id=OIP.KwC98ZFgcMenBlFlSqf4WAHaLH&pid=Api&P=0",
          posted: "Posted 8h Ago",
        },
      ],
    },
    {
      id: 13,
      name: "hamzaraza7",
      image:
        hamza,
      stories: [
        {
          story:
            "https://tse2.mm.bing.net/th?id=OIP.TMNvUJxPLt9NgT2gnsVLcQHaLH&pid=Api&P=0",
          posted: "Posted 8h Ago",
        },
      ],
    },
    {
      id: 14,
      name: "rameenmaryam",
      image:
        "https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-9/182786803_2934993793486125_7209103003797421597_n.jpg?stp=dst-jpg_p720x720&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHj2TdiDYt4OpeXKPvS2FcocLutnQymkNhwu62dDKaQ2E8dFGlyWAmkYWLqo2KfQY1FmAtPB64rBb9lAQROLhZy&_nc_ohc=kYGIO_HiYtoAX8P4-BG&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfCdlDTd2jgHkv2BL_VVWrX3lCgd8-K02A3oMJHRofjARw&oe=6415483C",
      stories: [
        {
          story:
            "https://tse4.mm.bing.net/th?id=OIP._vv_H6a8HE98aOWjxR29HwHaLH&pid=Api&P=0",
          posted: "Posted 8h Ago",
        },
      ],
    },
  ];
  const suggested = [
    {
      id: 20,
      name: "talha.khan_69",
      follow: "Follows you",
      image:
        talha,
    },
    {
      id: 21,
      name: "safarazaa",
      follow: "Follows you",
      image:
        "https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-9/182786803_2934993793486125_7209103003797421597_n.jpg?stp=dst-jpg_p720x720&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHj2TdiDYt4OpeXKPvS2FcocLutnQymkNhwu62dDKaQ2E8dFGlyWAmkYWLqo2KfQY1FmAtPB64rBb9lAQROLhZy&_nc_ohc=kYGIO_HiYtoAX8P4-BG&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfCdlDTd2jgHkv2BL_VVWrX3lCgd8-K02A3oMJHRofjARw&oe=6415483C",
    },
    {
      id: 22,
      name: "farooq_ahmed001",
      follow: "Followed by safeen_123",
      image:
        farooq,
    },
    {
      id: 23,
      name: "aadi.farid",
      follow: "Followed by somayya_02 + 5 more",
      image:
        azam,
    },
    {
      id: 24,
      name: "fakhir.mirr",
      follow: "Followed by ukasha_a... + 8 more",
      image:
        fakhir,
    },
  ];
  const newsfeed=[
    {
      id:12,
      name:"faiq.umer",
      profile:faiq,
      image: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t1.6435-9/130957955_2498143543818901_469961598866206187_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE1R_gnHfnh4P7wc7YC5AaluS26k8LExYC5LbqTwsTFgAyqjmsfHSvnR7423oippFHbgb8JZaoI_4HL09rVOvwk&_nc_ohc=gVFfMKrYMsQAX_LXOrc&_nc_oc=AQkfapSbgRePcBl59kle3dhsjhrDZOAQKBpffxiO3nB1ZQlic3UgnwCIVzpGj3sf4ag&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfDcwTW1e3PNjx-TKlZQnEdfJAaLBi4nRPRzCwGoxR_BIg&oe=64192E18",
      posted: "1d",
      comments: "10",
      caption: "Hold my hand and I'll prove not everyone leaves 🖤",
      liked: "aqib_mehtab 92 others",
      likedimage: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/272890297_3122150054670477_3100786536773693556_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeENbto_shg27QguSmLOhXeSa7I1C-e8Zj1rsjUL57xmPcvGZDrnHqK3Wyu1pMeQokkwb-LBBmL_h3YC1S3PxCyO&_nc_ohc=bt43-6mN99EAX9qaDBg&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfARG4DZoRNuir9ZpKJWEgcXbqi96yEL6f_Ym0ybvxLRlw&oe=63F6552C",
      border:true,
      message :[]
    },
    {
      id: 212,
      name:"_sameersidd._",
      profile:"https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/321908337_480188084192516_1031501553856039307_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGWSYyXimKQZIoiRevt8YcRaKqs-I3G45hoqqz4jcbjmAqRmvo2QSCa9Z3K2EFtxuNwQHzDjdqcUy775EgQ_96j&_nc_ohc=1W5zdLUEF9UAX_O6AIe&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfAJDGTrLdhO58rInHy81Klrsk0j3K2qL_fVLVCmJ0iFTg&oe=63F5C763",
      image: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/260675798_2680081178960643_6492317174193418292_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE-Qb7-nKiAhWcFUOx1LGZ2J7MA8gKD1RQnswDyAoPVFDBcWvvQuTSaxSe3-Lvrrk0hX0ZOF46hDVlegvQX16Xr&_nc_ohc=Ihh4Zs9OQokAX9L9pX7&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfB3XIv76cS0WV8pkN9cWtxPXhxW9wkUuCyWzlAQB5QKBQ&oe=63F6CB58",
      posted: "12h",
      comments: "6",
      caption: "Coping ok.",
      liked: "shyn_mhmood 59 others",
      likedimage: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/314599918_1785758038458912_4982266317743827956_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF1Yc8b8zmZAcV4-xgInCsBIICzJk34_1wggLMmTfj_XFo8Za4UjRpI5Y4ZpI1Mj1Bvj87Va3CrjTqsbgh5nvgF&_nc_ohc=sqfY8O4xikUAX9Qu7gI&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfCGGQXQfLx3PxxkMjdSMvkfjOb4uFO3cdog3HmUaQAZ7Q&oe=63F68944",
      border:false,
      message :[]
    },
    {
      id:213,
      name:"xain.rehman",
      profile:"https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/279713471_7619212374763082_4824274654927912082_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGxvJ-ks73zUgyZxWZh1S9e60nGzemIRkXrScbN6YhGRTsoROIEaRIoA_M3wuA_D8LZCzxtU7oS5s57MqdjmQfW&_nc_ohc=cLaWBs6dQTcAX8L4I2O&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfDiLdzdzNGvq6RDdb7ok6APLZ-5N3zZW4MG_tfIUC7USQ&oe=63F7E938",
      image: "https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/231216263_6121556204528714_5658534278383112711_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHkCLY7Rjg6xJ0753TL0dGf4CqmBJ0CA3PgKqYEnQIDc9Nfy60xPsxBH3NNHWm19CUI1Vp28uVEjbO0SleRONhH&_nc_ohc=2eEiObzAP0cAX95GNPQ&tn=8yrXWYui61hPE9Ah&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfC0z6tz4g8ysR5IiWYJeJm1ux3D8yGPfi7MS8eomxqxXw&oe=63F8A3A5",
      posted: "3d",
      comments: "15",
      caption: "🥀✨تیرے بن نی لگدا دل میرا ڈھولنا",
      liked: "syedwahab1 122 others",
      likedimage: wahab,
      border:false,
      message :[]
    },
  ]
  return (
    <InstaContext.Provider
      value={{
        users,
        name,
        setname,
        background,
        setbackground,
        suggested,
        follow,
        setfollow,
        newsfeed,
        liked,
        setliked,
      }}
    >
      {props.children}
    </InstaContext.Provider>
  );
};

export default InstaState;
