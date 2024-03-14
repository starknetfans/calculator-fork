function fomo3d() {
    var ethpec = parseFloat(document.getElementById('ethpec').value);
    var getethpec = parseFloat(document.getElementById('getethpec').value);
    var keypec = parseFloat(document.getElementById('keypec').value);
    var totalkeypec = parseFloat(document.getElementById('totalkeypec').value);
    var i, t, buykey, buyeth, noweth, nowkeyprice, endkeyprice;
    for (buykey = 0, i = ethpec - getethpec, t = totalkeypec; i > 0; t++) {
        buykey++;
        i = i - (((0.000074999921875 * 0.54 + 0.00000000015625 * 0.54 * t) / t) * (keypec * 2000)); // Adjusting keypec
    }

    document.getElementById('endkey').value = buykey + totalkeypec;
    document.getElementById('buykey').value = buykey;

    nowkeyprice = (0.000074999921875 + 0.00000000015625 * totalkeypec) * 2000; // Adjusting key price
    endkeyprice = (0.000074999921875 + 0.00000000015625 * (buykey + totalkeypec)) * 2000; // Adjusting key price

    document.getElementById('nowkeyprice').value = nowkeyprice;
    document.getElementById('endkeyprice').value = endkeyprice;

    for (buyeth = 0, t = totalkeypec; buykey > 0; buykey--, t++) {
        buyeth = buyeth + ((0.000074999921875 + 0.00000000015625 * t) * 2000); // Adjusting key price
    }

    document.getElementById('buyeth').value = buyeth;

    for (noweth = 0, t = 1, i = totalkeypec; i > 0; i--, t++) {
        noweth = noweth + ((0.000074999921875 + 0.00000000015625 * t) * 2000); // Adjusting key price
    }

    document.getElementById('noweth').value = noweth;
}
