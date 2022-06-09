const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
        <div class="footer-content">
            <img src="img/logo 4.PNG" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Catfish species</li>
                    <li><a href="#" class="footer-link">Clarias gariepinus</a></li>
                    <li><a href="#" class="footer-link">channel catfish</a></li>
                    <li><a href="#" class="footer-link">blue catfish</a></li>
                    <li><a href="#" class="footer-link">black bullhead</a></li>
                    <li><a href="#" class="footer-link">wels catfish</a></li>
                    <li><a href="#" class="footer-link">brown bullhead</a></li>
                    <li><a href="#" class="footer-link">flathead catfish</a></li>
                    <li><a href="#" class="footer-link">ghost catfish</a></li>
                    <li><a href="#" class="footer-link">walking catfish</a></li>
                    <li><a href="#" class="footer-link">white bullhead</a></li>
                </ul>

                <ul class="category">
                    <li class="category-title">other species</li>
                    <li><a href="#" class="footer-link">Tuna</a></li>
                    <li><a href="#" class="footer-link">alaskan salmon</a></li>
                    <li><a href="#" class="footer-link">cod</a></li>
                    <li><a href="#" class="footer-link">herring</a></li>
                    <li><a href="#" class="footer-link">mahi-mahi</a></li>
                    <li><a href="#" class="footer-link">mackerel</a></li>
                    <li><a href="#" class="footer-link">perch</a></li>
                    <li><a href="#" class="footer-link">rainbow trout</a></li>
                    <li><a href="#" class="footer-link">sardines</a></li>
                    <li><a href="#" class="footer-link">striped bass</a></li>
                </ul>
            </div>   
        </div>
        <p class="footer-title">about company</p>
            <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quia nihil nemo recusandae, debitis soluta omnis consequuntur, sunt ea qui tempora fugiat at? Soluta ipsum at debitis vitae iure iusto. Velit ad ducimus consectetur pariatur odio temporibus alias commodi unde, culpa repellat ut facere quia similique! Laudantium, unde. Ea perspiciatis ipsum voluptas est in aliquam aperiam vel magni, eaque minus, fugiat ex optio. Mollitia tempore voluptatum in error, dolor omnis sunt! Voluptatem officia est officiis illum magni error reiciendis exercitationem incidunt obcaecati deleniti, illo similique itaque cupiditate corporis iusto sed sapiente amet placeat iure perferendis neque excepturi. Ad, omnis nihil.</p>
        <p class="info">support emails - help@eFish.com, customersupport@eFish.com</p>
        <p class="info">telephone - +234 8067394118, +234 8036208261</p>
        
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy page</a>
            </div>

            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter </a>
            </div>
        </div>
        <p class="footer-credit">best catfish e-commerce store</p>
    `;
}

createFooter();