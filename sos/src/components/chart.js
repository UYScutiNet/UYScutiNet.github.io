const Chart = () => (
  <svg className="w-full" viewBox="0 0 617 430">
    <circle cx="402" cy="215" r="215" fill="#00a266"></circle>
    <path d="M402 215,L402 0,A215 215 0 0 0 275 40,Z" fill="#014f30"></path>
    <path d="M402 215,L275 40,A215 215 0 0 0 200 289,Z" fill="#43c68e"></path>
    <path d="M402 215,L200 289,A215 215 0 0 0 402 430,Z" fill="#8edbb6"></path>
    <line
      className="line-style"
      x1="402"
      y1="0"
      x2="402"
      y2="430"
      strokeWidth="2"
      stroke="#fff"
    ></line>
    <line
      className="line-style"
      x1="402"
      y1="215"
      x2="275"
      y2="40"
      strokeWidth="2"
      stroke="#fff"
    ></line>
    <line
      className="line-style"
      x1="402"
      y1="215"
      x2="200"
      y2="289"
      strokeWidth="2"
      stroke="#fff"
    ></line>
    <text className="text-style" x="305" y="65" fill="#fff">
      LP Incentive
    </text>
    <text className="text-style" x="325" y="85" fill="#fff">
      10.00%
    </text>
    <text className="text-style" x="265" y="330" fill="#fff">
      Staking Incentive
    </text>
    <text className="text-style" x="305" y="350" fill="#fff">
      20%
    </text>
    <text className="text-style" x="430" y="215" fill="#fff">
      Airdrop for OS users
    </text>
    <text className="text-style" x="495" y="235" fill="#fff">
      50%
    </text>
    <line
      className="line-style-black"
      x1="0"
      y1="152"
      x2="170"
      y2="152"
      strokeWidth="2"
      stroke="#000"
    ></line>
    <line
      className="line-style-black"
      x1="170"
      y1="152"
      x2="260"
      y2="172"
      strokeWidth="2"
      stroke="#000"
    ></line>
  </svg>
);

export default Chart;
