const transfers = [];

function createTransfer(transfer) {
  transfers.push(transfer);
  return transfer;
}

function listTransfers() {
  return transfers.slice();
}

module.exports = {
  transfers,
  createTransfer,
  listTransfers
};
