const nav = document.querySelector(".navbar");

nav.innerHTML = `
	<div class="container py-2">
		<a class="navbar-brand" href="https://gemportfolio.github.io/preciousanichukwu.com">
			<!--span><img src="./assets/img/logo.png"></span-->
			Precious Anichukwu
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ms-0 ms-auto">
				<li class="nav-item my-auto">
					<a class="nl nav-link" href="./index.html">Home</a>
				</li>
				<li class="nav-item my-auto">
					<a class="nl nav-link" href="#about">About Me</a>
				</li>
				<li class="nav-item my-auto">
					<a class="nl nav-link" href="#services">Services</a>
				</li>
				<li class="nav-item my-auto">
					<a class="nl nav-link" href="#testimonials">Testimonials</a>
				</li>
				<li class="nav-item my-auto">
					<a class="nl nav-link-btn lazy-el" href="#ebooks">
						Buy My eBook
						<i class="bi bi-cart ps-1"></i>
					</a>
				</li>
				<div class="d-flex">
					<li class="nav-item ct my-auto">
						<a class="nav-icon" href="https://facebook.com/precious.chineyenwa.anichukwu">
							<i class="bi bi-facebook"></i>
						</a>
					</li>
					<li class="nav-item ct my-auto">
						<a class="nav-icon" href="https://www.instagram.com/preciouschineyenwaanichukwu/">
							<i class="bi bi-instagram"></i>
						</a>
					</li>
					<li class="nav-item ct my-auto">
						<a class="nav-icon" href="https://www.linkedin.com/in/precious-anichukwu/">
							<i class="bi bi-linkedin"></i>
						</a>
					</li>
				</div>
			</ul>
		</div>
	</div>
    `;


   
   
   
   
   
