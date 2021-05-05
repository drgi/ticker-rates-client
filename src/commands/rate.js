const { Command, flags } = require("@oclif/command");
const { getRates } = require("../controllers/apiTransport");

class RateCommand extends Command {
  static args = [
    {
      name: "tikerPair",
      required: true,
      description: "Tiker pair for currency",
      parse: (str) => str.toUpperCase(),
    },
  ];
  async run() {
    const { args } = this.parse(RateCommand);
    const { tikerPair } = args;
    const { data } = await getRates(tikerPair);
    if (!data[tikerPair]) throw new Error("No requested field in API response");
    this.log(data[tikerPair]);
  }
  async catch(err) {
    if (err.isAxiosError) {
      this.log(`Error response from API: ${err.response.data.error}`);
    } else {
      this.log(err.message);
    }
  }
}

RateCommand.description = `Command for request rate for tiker pair. Exumpel: rate eth-usdt`;

module.exports = RateCommand;
