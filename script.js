// 首页咨询按钮交互
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
    // 检查是否是产品分类页（单鞋/棉鞋）
    const isProductPage = document.getElementById('productGrid') !== null;
    if (!isProductPage) return;

    // 获取元素
    const tags = document.querySelectorAll('.tag');
    const productCards = document.querySelectorAll('.product-card');
    
    // 初始化筛选状态
    let currentSaleType = 'all';

    // 点击选择销售类型
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
            const cardSaleType = card.dataset.sale;
            
            // 判断是否符合筛选条件
            const saleMatch = currentSaleType === 'all' || cardSaleType === currentSaleType;
            
            // 显示/隐藏产品卡片
            if (saleMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});