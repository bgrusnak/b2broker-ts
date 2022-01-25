import B2BInPay, {TEST_KEY, TEST_SECRET} from '../src'; // 
import { expect } from 'chai';


describe('Wallet tests', () => { // the tests container
    it('Wallet test', async () => { // the single test
        const bip = new B2BInPay({testMode: true}); // this will be your class
        await bip.connect(TEST_KEY, TEST_SECRET);
        const wallets = await bip.getWallets();
        expect(wallets).to.be.not.empty;
    });
});