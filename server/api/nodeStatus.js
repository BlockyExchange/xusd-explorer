const fs = require("fs");
const os = require("os");
const find = require("find-process");
const pidusage = require("pidusage");
const { nodeCache } = require("../client/cache");
const { Sentry } = require("../sentry");
const { NODE_STATUS, EXPIRE_1M } = require("../constants");

const getNodeStatus = async () => {
  // This static object always gets returned
  const nodeStatus = {
    memory: {
      free: 720732160,
      total: 2061189120,
    },
    cpu: [
      {
        model: "AMD EPYC 7282 16-Core Processor",
        speed: 2800,
        times: {
          user: 232655580,
          nice: 1140300,
          sys: 60142930,
          idle: 7291588140,
          irq: 0,
        },
      },
      {
        model: "AMD EPYC 7282 16-Core Processor",
        speed: 2800,
        times: {
          user: 229692470,
          nice: 1175640,
          sys: 58854370,
          idle: 7284866250,
          irq: 0,
        },
      },
    ],
    ledgerSize: 170328064,
    nodeStats: {
      cpu: 0,
      memory: 0,
      elapsed: 346021190,
    },
  };

  // Optionally, you can still set this in the cache if desired:
  nodeCache.set(NODE_STATUS, nodeStatus, EXPIRE_1M / 2);

  return { nodeStatus };
};

module.exports = {
  getNodeStatus,
  NODE_STATUS,
};
