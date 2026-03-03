// 平滑滚动到咨询区域
document.querySelectorAll('.btn-consult, .btn-hero').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('咨询功能已触发，可在此处对接表单或跳转至联系页面');
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(20, 30, 48, 0.95)';
    } else {
        navbar.style.background = 'rgba(20, 30, 48, 0.85)';
    }
});
// 产品筛选功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取元素
    const shoeTypeSelect = document.getElementById('shoeTypeSelect');
    const tags = document.querySelectorAll('.tag');
    const productCards = document.querySelectorAll('.product-card');
    
    // 初始化筛选状态
    let currentShoeType = 'all';
    let currentSaleType = 'all';

    // 一级筛选：下拉框选择鞋类
    shoeTypeSelect.addEventListener('change', function() {
        currentShoeType = this.value;
        filterProducts();
    });

    // 二级筛选：点击选择销售类型
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            // 移除所有标签的active样式
            tags.forEach(t => t.classList.remove('active'));
            // 给当前点击的标签添加active样式
            this.classList.add('active');
            // 更新筛选状态
            currentSaleType = this.dataset.type;
            // 执行筛选
            filterProducts();
        });
    });

    // 筛选产品核心函数
    function filterProducts() {
        productCards.forEach(card => {
            const cardShoeType = card.dataset.shoe;
            const cardSaleType = card.dataset.sale;
            
            // 判断是否符合筛选条件
            const shoeMatch = currentShoeType === 'all' || cardShoeType === currentShoeType;
            const saleMatch = currentSaleType === 'all' || cardSaleType === currentSaleType;
            
            // 显示/隐藏产品卡片
            if (shoeMatch && saleMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});