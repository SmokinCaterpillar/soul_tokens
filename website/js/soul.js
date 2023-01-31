/************ main function *************************************/


console.log('Loading Soul Token script');


/**
 * Rounds values
 *
 * @param value: value to be rounder
 * @param decimals: remaining number of decimals
 * @returns rounded number
 */
function round(value, decimals) {
    var rounder = Math.pow(10, decimals);
    return Math.round(value * rounder) / rounder;
}


var Contract = require('web3-eth-contract');
var BigNumber = require('bignumber.js');

var Web3 = require('web3');

// ABI and addresses of both contracts
const contractAddress = '0x5bF554632a059aE0537a3EEb20Aced49348B8F99';
// test net address
// const contractAddress = '0xa45474876ef1c2b7ced5c7bdc803669cd8a6d61a'
const contractAbi = [{
    "constant": true,
    "inputs": [{"name": "noSoulMate", "type": "address"}],
    "name": "soulIsOwnedBy",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_spender", "type": "address"}, {
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "approve",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "soulOwner", "type": "address"}],
    "name": "ownsSouls",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "soulsForSale",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_from", "type": "address"}, {
        "name": "_to",
        "type": "address"
    }, {"name": "_amount", "type": "uint256"}],
    "name": "transferFrom",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "soulsSold",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{"name": "", "type": "uint8"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "totalObol",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "napkinPrice",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "charonsBoat",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "fee", "type": "uint256"}],
    "name": "changeBookingFee",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_to", "type": "address"}, {
        "name": "noSoulMate",
        "type": "address"
    }],
    "name": "transferSoul",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "bookingFee",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "noSoulMate", "type": "address"}],
    "name": "buySoul",
    "outputs": [{"name": "amount", "type": "uint256"}],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "noSoulMate", "type": "address"}],
    "name": "soldSoulBecause",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "unit",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "page", "type": "uint256"}],
    "name": "soulBookPage",
    "outputs": [{"name": "", "type": "address"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "reason", "type": "string"}, {
        "name": "price",
        "type": "uint256"
    }],
    "name": "sellSoul",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_to", "type": "address"}, {
        "name": "_amount",
        "type": "uint256"
    }],
    "name": "transfer",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "noSoulMate", "type": "address"}],
    "name": "soldSoulFor",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}, {
        "name": "_spender",
        "type": "address"
    }],
    "name": "allowance",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "newBoat", "type": "address"}],
    "name": "changeBoat",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "constant": true,
    "inputs": [],
    "name": "obol",
    "outputs": [{"name": "", "type": "uint8"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {
        "indexed": true,
        "name": "_to",
        "type": "address"
    }],
    "name": "SoulTransfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "_from", "type": "address"}, {
        "indexed": true,
        "name": "_to",
        "type": "address"
    }, {"indexed": false, "name": "_value", "type": "uint256"}],
    "name": "Transfer",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "name": "_owner", "type": "address"}, {
        "indexed": true,
        "name": "_spender",
        "type": "address"
    }, {"indexed": false, "name": "_value", "type": "uint256"}],
    "name": "Approval",
    "type": "event"
}];

const nullAddress = "0x0000000000000000000000000000000000000000";

var soulToken;  // global reference to impeachment contract
var bookingFee = 0.003;
var unit = 1000000;
var totalSupply = new BigNumber(144000 * unit);

var currentPage = -1;
var totalPages = 1;
var soulsPerPage = 12;
var onSale = false;

var priceDict = {};
var currentAccount;

var metamask_info = "Please, unlock your Metamask wallet to buy or sell souls, and refresh this website. You can find and install Metamask, the Ethereum browser plugin, here: https://metamask.io/";

var withMeta = false;

function createContract() {
    Contract.setProvider(web3.currentProvider);
    soulToken = new Contract(contractAbi, contractAddress);
}


function startApp() {
    // Initialize the contracts
    createContract();
    withMeta = true;


    // Event Listener for buying Impeachment Tokens
    listenForSoulSellsClicks();
    listenForNextPageClicks();
    listenForPreviousPageClicks();
    // check if coinbase is on sale
    checkOnSale();
    // Update the Balances
    updateBalances();
    updateTotalSupply();
    getSoulBook(-1);

    console.log('App started.')
}


function startAppNoWeb3() {
    // var button = document.getElementById('nextPage');
    // button.addEventListener('click', function() {
    //     alert(metamask_info)
    // });
    // var button = document.getElementById('previousPage');
    // button.addEventListener('click', function() {
    //     alert(metamask_info)
    // });
    createContract();

    var button = document.getElementById('sellSoulButton');
    button.addEventListener('click', function () {
        alert(metamask_info)
    });

    // Event Listener for buying Impeachment Tokens
    listenForNextPageClicks();
    listenForPreviousPageClicks();

    // Update total supply and soulbook
    updateTotalSupply();
    getSoulBook(-1);

}


function listenForNextPageClicks() {
    var button = document.getElementById('nextPage');
    button.addEventListener('click', function () {
        turnPage(1)
    });
}


function listenForPreviousPageClicks() {
    var button = document.getElementById('previousPage');
    button.addEventListener('click', function () {
        turnPage(-1)
    });
}


function turnPage(howMany) {
    currentPage += howMany;
    //code before the pause
    var page = currentPage;
    document.getElementById('pageNumber').innerHTML = "<mark>Page " + page + "</mark>";
    setTimeout(function () {
        getSoulBook(page)
    }, 200);

}


function listenForSoulSellsClicks() {
    var button = document.getElementById('sellSoulButton');
    button.addEventListener('click', function () {

        var ether = document.getElementById("soulPrice").value;
        var inWei = web3.utils.toWei(ether, 'ether');
        var bookingFeeInWei = web3.utils.toWei(String(bookingFee), 'ether');
        var reason = document.getElementById("soulComment").value;

        console.log('Clicked soul selling for ' + inWei + ' Wei because: ' + reason + 'Using booking Fee' + bookingFeeInWei);

        var rLength = reason.length;
        if (onSale) {
            alert('You did put your soul already on sale! Sneaky, but sorry, you can sell your soul only once!');
        } else if (rLength === 0) {
            alert('C`mon you need a reason to sell your soul!');
        } else if (rLength > 333) {
            alert('Your reason is too long with ' + rLength + ' characters, please use 333 or less! It must fit on a napkin!');
        } else if (inWei <= 10) {
            alert('Your soul has to have a price, you cannot give it away for free or even pay for giving it away. What is wrong with you?');
        } else {
            if (currentAccount === null || currentAccount === nullAddress) {
                alert("Please, unlock your MetaMask wallet, refresh this website, and try again.");
            } else {
                var gas = 250000 + 1000 * rLength;
                console.log('Selling with account ' + currentAccount + ' using gas ' + gas);
                soulToken.methods.sellSoul(reason, inWei).send({
                    from: currentAccount,
                    value: bookingFeeInWei,
                    gas: gas
                }).then(function (txHash) {
                    console.log('Transaction sent');
                    console.dir(txHash);
                });

            }
        }
    })
}


function updateTotalSupply() {

    var napkins;

    soulToken.methods.balanceOf(contractAddress).call().then(function (charonsNapkins) {
        console.log('Charons napkins ' + napkins);
        charonsNapkins = new BigNumber(charonsNapkins);
        napkins = totalSupply.minus(charonsNapkins).dividedBy(unit);
        napkins = round(napkins, 0);
        var htmlText = "In total Charon has distributed " + napkins + " napkins out of all available 144000.";

        document.getElementById('totalSupply').innerHTML = htmlText;

        htmlText = "Hurry, because Charon only sells 144000 Soul Napkins and there are only " +
            "<b>" + (144000 - napkins) + "</b> napkins left!";

        document.getElementById('supplyLeft').innerHTML = htmlText;
    });

}


function checkOnSale() {
    soulToken.methods.soldSoulBecause(currentAccount).call().then(function (ownReason) {
        console.log('ownReason ' + ownReason);
        onSale = ownReason.length > 0;
    });
}


function updateBalances() {
    var htmlText;
    console.log("Updating Balances")
    soulToken.methods.balanceOf(currentAccount).call().then(function (napkins) {
        console.log('napkins ' + napkins);
        napkins = new BigNumber(napkins).dividedBy(unit);

        soulToken.methods.ownsSouls(currentAccount).call().then(function (souls) {
            console.log('souls ' + souls);

            htmlText = "You own " + souls + " soul(s) and " + napkins + " SOUL tokens, i.e. napkins.";
            document.getElementById('balance').innerHTML = htmlText
        });
    }).catch(function (error) {
        console.error(error);
        console.log('ERROR no it balance found');
        htmlText = "Please, unlock your MetaMask wallet to see your soul and napkin balances.";
        document.getElementById('balance').innerHTML = htmlText
    });
}


function getWrittenNapkinSold(index, soul, reason, priceInEth, owner) {
    var half = soul.length / 2;
    var soul1Half = soul.substr(0, half);
    var soul2Half = soul.substr(half + 1);
    var owner1Half = owner.substr(0, half);
    var owener2Half = owner.substr(half + 1);
    var htmlText = "<div class='stacker col-lg-3 col-sm-3'>" +
        "<a class='portfolio-box text-faded text-center' id=" + soul + "><br>" +
        "<h5>SOUL #" + index + "</h5>" +
        "<div class='selector'><p> <i>" + reason + "</i></p></div>" +
        "<p>" +
        "<b>Owned by " + owner.substr(0, 7) + "..." +
        "<br>Bought for " + priceInEth + " ETH</b>" +
        "</p>" +
        "<div class='portfolio-box-caption'>" +
        "<div class='portfolio-box-caption-content'>" +
        "<div class='project-category text-faded'>" +
        "Soul of <br>&quot" + soul1Half + "<br>" + soul2Half + "&quot" +
        "</div>" +
        "<div class='project-name'>" +
        "Already Sold to <br><small>&quot" + owner1Half + "<br>" + owener2Half + "&quot</small>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</div>";
    return htmlText
}


function getWrittenNapkinForSale(index, soul, reason, priceInEth) {
    var half = soul.length / 2;
    var soul1Half = soul.substr(0, half);
    var soul2Half = soul.substr(half + 1);
    var htmlText = "<div class='stacker col-lg-3 col-sm-3'>" +
        "<a class='portfolio-box2 text-faded text-center handover'><br>" +
        "<h5>SOUL #" + index + "</h5>" +
        "<div class='selector'><p> <i>" + reason + "</i></p></div>" +
        "<p><b>Available for " + priceInEth + " ETH</b></p>" +
        "<div class='portfolio-box2-caption handover' id=" + soul + ">" +
        "<div class='portfolio-box2-caption-content handover' id=b" + soul + ">" +
        "<div class='project-category text-faded handover' id=c" + soul + ">" +
        "Soul of <br>&quot" + soul1Half + "<br>" + soul2Half + "&quot" +
        "</div>" +
        "<div class='project-name' id=n" + soul + ">" +
        "For Sale:<br>Only " + priceInEth + " ETH!" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</div>";
    return htmlText
}


function getSoulBook(page) {
    var soulsForSale;
    var soulsSold;
    var totalSouls;
    var htmlText;

    soulToken.methods.soulsForSale().call().then(function (soulsForSale) {
        console.log('soulsForSale ' + soulsForSale);

        soulToken.methods.soulsSold().call().then(function (soulsSold) {
            console.log('soulsSold ' + soulsSold);

            htmlText = "<mark>" + soulsForSale + " soul(s) for sale and " + soulsSold + " soul(s) sold. " +
                "Just click on one of the napkins to purchase the soul. After your purchase, " +
                "wait a couple of minutes until your transaction is mined into the Blockchain and refresh this website " +
                "to see that you are the new owner of that soul.</mark>";
            document.getElementById('status').innerHTML = htmlText;

            totalSouls = Number(soulsSold) + Number(soulsForSale);
            totalPages = Math.ceil(totalSouls / soulsPerPage);
            console.log('Soul book has pages ' + totalPages + ' and souls ' + totalSouls);
            if (page <= 0) {
                page = totalPages
            } else if (page > totalPages) {
                page = 1
            }

            document.getElementById('pageNumber').innerHTML = "<mark>Page " + page + " of " + totalPages + "</mark>";
            document.getElementById('soulBook').innerHTML = "";
            if ((page === currentPage) || (page === totalPages) || (page === 1)) {
                lookUpSouls(page, totalSouls);
                currentPage = page
            }

        });
    });
}


function lookUpSouls(page, totalSouls) {
    var end = Math.min(totalSouls, page * soulsPerPage);
    var start = Math.max(0, end - soulsPerPage);
    console.log('Looking up souls from idx ' + start + ' to idx ' + end);
    for (var idx = start; idx < end; idx++) {
        console.log('Looking up soul idx ' + idx);
        loadIndividualSoul(idx)
    }
}


document.querySelector('body').addEventListener('click', function (event) {
    var key = event.target.id;
    if (key.substr(1) in priceDict) {
        key = key.substr(1)
    }
    if (key in priceDict) {
        console.log("Buy button clicked!");

        if (withMeta) {

            var soulPrice = priceDict[key];

            console.log("Buying soul " + key + " for " + soulPrice + " Wei");
            var account = currentAccount;
            if (account === null || account === nullAddress) {
                alert("Please, unlock your MetaMask wallet, refresh this website, and try again.");
            } else {

                console.log('Buying with account ' + account);

                soulToken.methods.buySoul(key).send({
                    from: account,
                    value: soulPrice,
                    gas: 200000
                }).then(function (txHash) {
                    console.log('Transaction sent');
                    console.dir(txHash)
                });

            }
        } else {
            alert(metamask_info);
        }
    }
});


/**
 * Encodes
 * & --> &amp;
 < --> &lt;
 > --> &gt;
 " --> &quot;
 ' --> &#x27;     &apos; not recommended because its not in the HTML spec (See: section 24.4.1) &apos; is in the XML and XHTML specs.
 / --> &#x2F;     forward slash is included as it helps end an HTML entity
 */
function xss_prevention(userString) {
    userString = userString.replace('&', '&amp').replace('<', '&lt').replace('>', '&gt');
    return userString.replace('"', '&quot').replace("'", "&#x27").replace("/", "&#x2F");
}


function loadIndividualSoul(soulIndex) {
    var soul;
    var reason;
    var owner;
    var price;
    var priceInEth;
    var htmlText;

    soulToken.methods.soulBookPage(soulIndex).call().then(function (soul) {
        console.log('Found soul ' + soul);

        soulToken.methods.soldSoulBecause(soul).call().then(function (reason) {
            reason = xss_prevention(reason);
            console.log('Found reason ' + reason);

            if (reason.length > 333) {
                reason = reason.substr(0, 333) + "...";
            }
            if (reason.length > 111) {
                reason = reason
            } else {
                reason = "<br>" + reason
            }


            soulToken.methods.soldSoulFor(soul).call().then(function (price) {
                console.log('Found price ' + price);

                soulToken.methods.soulIsOwnedBy(soul).call().then(function (owner) {
                    console.log('Found owner ' + owner);

                    priceInEth = web3.utils.fromWei(price, 'ether');
                    priceInEth = round(priceInEth, 4);

                    if (owner === nullAddress) {
                        priceDict[soul] = price;
                        htmlText = getWrittenNapkinForSale(soulIndex + 1, soul, reason, priceInEth);
                    } else {
                        htmlText = getWrittenNapkinSold(soulIndex + 1, soul, reason, priceInEth, owner);
                    }
                    document.getElementById('soulBook').innerHTML += htmlText;
                });

            });
        });

    });
}


window.addEventListener('load', function () {

    // Check if Web3 has been injected by MetaMask:
    if (window.ethereum) {
        // You have a web3 plugin, Start the DApp
        web3 = new Web3(window.ethereum);
        ethereum.enable().then(function (accounts) {
            currentAccount = accounts[0]
            console.log("Current account " + currentAccount)
            startApp();
        });
    } else {
        console.log('You need a Web3 plugin like MetaMask for your browser to trade souls on this website.\n' +
            'Visit https://metamask.io/ to install the plugin.');
        web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/3ab514ae083f4b1d80da8422d4b0e7d3'))
        startAppNoWeb3();
    }
});


console.log('Soul Script loaded.');