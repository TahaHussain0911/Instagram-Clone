import React, { useState } from "react";
import InstaContext from "./InstaContext";
import amas from '../Profileimages/amas.jpg'
import faiq from '../Profileimages/faiq.jpg'
import faiqpost from '../Profileimages/faiqpost.jpg'
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
import sameer from '../Profileimages/sameer.jpg'
import sameerpost from '../Profileimages/sameerpost.jpg'
import shayan from '../Profileimages/shayan.jpg'
import aqib from '../Profileimages/aqib.jpg'
import zain from '../Profileimages/zain.jpg'
import zainpost from '../Profileimages/zainpost.jpg'
import blackPhoto from '../Profileimages/blackPhoto.jpg'
import csgo from '../Profileimages/csgo.jpg'
import gilgit from '../Profileimages/gilgit.jpg'

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
          gilgit,
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
        blackPhoto,
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
          csgo,
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
        blackPhoto,
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
        blackPhoto,
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
      image: faiqpost,
      posted: "1d",
      comments: "10",
      caption: "Hold my hand and I'll prove not everyone leaves 🖤",
      liked: "aqib_mehtab 92 others",
      likedimage: aqib,
      border:true,
      message :[]
    },
    {
      id: 212,
      name:"_sameersidd._",
      profile:sameer,
      image: sameerpost,
      posted: "12h",
      comments: "6",
      caption: "Coping ok.",
      liked: "shyn_mhmood 59 others",
      likedimage: shayan,
      border:false,
      message :[]
    },
    {
      id:213,
      name:"xain.rehman",
      profile: zain,
      image: zainpost,
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
