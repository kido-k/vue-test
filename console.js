vm.$watch(function () {
    // 鉛筆の個数
    return this.items[0].quantity
}, function (quantity) {
    console.log(quantity)
});

vm.items[0].quantity = 1;

console.log(vm.totalPrice)