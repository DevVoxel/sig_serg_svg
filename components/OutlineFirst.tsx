'use client';

import React from 'react';
import { motion } from 'framer-motion';

function OutlineFirst(): JSX.Element {
  return (
    <motion.svg
      width='360'
      height='360'
      viewBox='0 0 2095 2490'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 1,
        }}
        strokeWidth={10}
        strokeDasharray='0 1'
        d='M3.5 1982.5L83 2084.5H421L489 2152.5H561L828 1811.5H976.5L1156 1617H1250L1368 1698V1540.5L1250 1418M1250 1418H1145M1250 1418H1383.5L1250 1252M1250 1252H1156M1250 1252H1318L1156 1059.5H1304.5L1492.5 840.5H1180M3.5 1986.5L348 1527.5V1366L263.5 1457.5V1359.5L311 1305.5H231.5L303.5 1233.5H438.5L650 1010M806.5 1846.5L977.5 1980V2091.5M977.5 2091.5V2093M977.5 2091.5L851 2254.5H937.5M1050.5 2018.5V2147L904.5 2348H1090.5M1123.5 2254.5V2352L1246.5 2480.5V2312M510.5 1158V932.5L715 714L703 233L1002 504.5M649.5 1202V934L1038 466.5V8C1136.5 96.3333 1333.5 275 1333.5 283V557.5M1148 743.5L1481.5 413.5V710.5L1350.5 841M1414 842.167L1599 646V871M1489.5 999.5L1687 764.5L1694.5 999.5L1578.5 1151M1559 1150.5H1624.5L1689 1069.5L1829.5 1065L1642.5 1297.5M1727 1193.5H1869L2026 1361H1727M1883 1362.5L2086 1578H1786.5L1639.5 1407M1787.5 1576L1769.5 1596H1855L1333.5 2168.5L1345 1967.5M1340.5 2022L1270 2110.5V1937L1362 1801.5M1317.5 1803L1236.5 1914.5V1803L1176 1744M808 1056H1030L1100 1142.5L976 1282V1180H831.5M9 1986H151L399 1660V1606.5L477 1522.5H416L487.5 1423.5H426.5L560.5 1244M498.5 1626.5L675 1408.5V1359.5M675 1359.5L704 1318.5M675 1359.5H596L509 1462M510 1459L523 1595M433.5 2096.5L723.5 1744H758.5L775 1721.03M775 1721.03L877 1579V1533L775 1668.5V1721.03ZM308 1836L273.75 1880.25M273.75 1880.25L239.5 1924.5V1973L274.5 1939.5L273.75 1880.25ZM1086.5 2053.5V2168M1174.5 1695V1793.5M1146 1689.5V1771.5'
        stroke='#00FFC2'
      />
    </motion.svg>
  );
}

export default OutlineFirst;
