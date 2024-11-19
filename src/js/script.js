'use strict';

class EmailService {
    constructor() {
        if (EmailService.instance) {
            return EmailService.instance;
        }
        EmailService.instance = this;
    }
}


class PremiumEmailService extends EmailService{
    constructor() {
        super()
        this.premiumEmails = [];
        this.limit = 5;
    }

    addPremiumEmail(email){
        if (this.premiumEmails.length >= this.limit) throw new Error(`limit prem email: ${this.limit} `)
        this.premiumEmails.push(email);
    }

    getPremiumEmails() {
        return this.premiumEmails;
    }

}


class EnterpriseEmailService extends EmailService{

}






const premiumService1 = new PremiumEmailService();
const premiumService2 = new PremiumEmailService();
// const enterpriseService = new EnterpriseEmailService();
//
premiumService1.addPremiumEmail("vip1@premium.com");
premiumService1.addPremiumEmail("vip2@premium.com");
premiumService1.addPremiumEmail("vip3@premium.com");
premiumService1.addPremiumEmail("vip4@premium.com");
premiumService1.addPremiumEmail("vip5@premium.com");



console.log(premiumService1.getPremiumEmails());
// ["vip1@premium.com", "vip2@premium.com"]
//
// enterpriseService.addPremiumEmail("enterprise@premium.com");
//
// enterpriseService.migratePremiumEmails(premiumService2);
//
// console.log(premiumService2.getPremiumEmails());
// // ["enterprise@premium.com"]
//
// console.log(premiumService1.getLogs());


