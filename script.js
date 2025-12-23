// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 创建画廊分布图表
    createGalleryChart();
    
    // 处理新闻表单提交
    const newsForm = document.getElementById('simple-news-form');
    if (newsForm) {
        newsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const title = document.getElementById('simple-title').value.trim();
            const content = document.getElementById('simple-content').value.trim();
            
            if (!title || !content) {
                alert('请填写标题和内容');
                return;
            }
            
            // 这里可以添加将新闻保存到页面的功能
            // 为了保持简洁，这里只显示成功消息
            alert(`新闻"${title}"已发布！\n\n注意：这是简化版本，新闻不会永久保存。\n如需保存功能，可使用之前版本的完整代码。`);
            
            // 清空表单
            newsForm.reset();
        });
    }
});

// 创建画廊分布图表
function createGalleryChart() {
    const ctx = document.getElementById('galleryChart').getContext('2d');
    
    // 图表数据 - 根据截图中的百分比
    const chartData = {
        labels: ['亚洲画廊', '欧洲画廊', '北美画廊', '其他地区'],
        datasets: [{
            data: [45.8, 32.5, 18.3, 3.4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',  // 红色
                'rgba(54, 162, 235, 0.7)',  // 蓝色
                'rgba(255, 206, 86, 0.7)',  // 黄色
                'rgba(75, 192, 192, 0.7)'   // 绿色
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1,
            hoverOffset: 15
        }]
    };
    
    // 图表配置
    const config = {
        type: 'pie',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        font: {
                            size: 14
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            return `${label}: ${value}%`;
                        }
                    }
                }
            }
        }
    };
    
    // 创建图表
    new Chart(ctx, config);
}