// 3155 - Maximum Number of Upgradable Servers

function maxUpgrades(count, upgrade, sell, money) {
    for (let i = 0; i < count.length; i++) {
        const bank = money[i] + count[i] * sell[i];
        const servers = Math.floor(bank / (upgrade[i] + sell[i]));
        if (servers < count[i]) count[i] = servers;
    }
    return count;
}
