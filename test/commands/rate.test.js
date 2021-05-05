const { expect, test } = require("@oclif/test");

describe("rate", () => {
  test
    .stdout()
    .command(["rate"])
    .it("runs rate without arg", (ctx) => {
      expect(ctx.stdout).to.contain("Missing 1 required arg");
    });

  test
    .stdout()
    .command(["rate", "invalid"])
    .it("runs rate with invalid arg", (ctx) => {
      console.log("CTX", ctx);
      expect(ctx.stdout).to.contain(
        "One of request params have invalid format INVALID"
      );
    });
  test
    .stdout()
    .command(["rate", "eth-usdt"])
    .it("runs rete with valid arg", (ctx) => {
      const bool = /[0-9]*.[0-9]*/gi.test(ctx.stdout);
      expect(bool).to.equal(true);
    });
  test
    .stdout()
    .command(["rate", "ETH-USDT"])
    .it("runs rete with valid arg", (ctx) => {
      const bool = /[0-9]*.[0-9]*/gi.test(ctx.stdout);
      expect(bool).to.equal(true);
    });
  test
    .stdout()
    .command(["rate", "EtH-UsDt"])
    .it("runs rete with valid arg", (ctx) => {
      const bool = /[0-9]*.[0-9]*/gi.test(ctx.stdout);
      expect(bool).to.equal(true);
    });
});
