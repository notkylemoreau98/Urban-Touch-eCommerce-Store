import React from 'react';
import './styles/Mens.css';
import Product from './Product';

function Mens() {
	return (
		<div className="mens">
			<section className="mens__shirts">
				<h1>Shirts</h1>
				<div className="mens__shirtsContainer">
					<div className="mens__shirt rowTop">
						<Product 
							id="101" 
							title="Cotton Flannel Shirt" 
							price={24.99} 
							image="https://lp2.hm.com/hmgoepprod?set=source[/be/7b/be7b6c7f6fffed31bb773f6b933587abe3131482.jpg],origin[dam],category[men_shirts_flannel],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" 
						/>
					</div>
					
					<div className="mens__shirt rowTop">
						<Product 
							id="102" 
							title="Corduroy Shirt Jacket" 
							price={34.99} 
							image="https://lp2.hm.com/hmgoepprod?set=source[/36/11/3611f829c7e3c07a591c191adc2905124af6300f.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" 
						/>	
					</div>

					<div className="mens__shirt rowBottom">
						<Product 
							id="103" 
							title="Cotton T-Shirt" 
							price={19.99} 
							image="https://lp2.hm.com/hmgoepprod?set=source[/23/30/233077443c1048992774f379b226f8f0786998df.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" 
						/>
					</div>

					<div className="mens__shirt rowBottom">
						<Product 
							id="104" 
							title="Long-sleeved Jersey Shirt" 
							price={19.99} 
							image="https://lp2.hm.com/hmgoepprod?set=source[/6e/ec/6eecdc20cbd9cec6e33fc0b3827e77844a8d02fc.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" 
						/>
					</div>

				</div>
			</section>
			
			<section className="mens__pants">
				<h1>Pants</h1>
				<div className="mens__pantsContainer">
					<div className="mens__pant rowTop">
						<Product 
							id="105" 
							title="Light-Wash Skinny Jeans" 
							price={34.99} 
							image="https://lp2.hm.com/hmgoepprod?set=source[/76/4f/764fb4e5b21db69fb9300172984edb0f32af3e60.jpg],origin[dam],category[men_jeans_skinny],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" 
						/>
					</div>

					<div className="mens__pant rowTop">
						<Product 
							id="106" 
							title="Cotton Chinos" 
							price={17.99} 
							image="https://lp2.hm.com/hmgoepprod?set=source[/df/c0/dfc05e354e86bd1130549a5b1a3dc194fa8e5e85.jpg],origin[dam],category[men_trousers_chinos],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]"/>
					</div>

					<div className="mens__pant rowBottom">
						<Product 
							id="107" 
							title="Slim-Fit Suit Pants" 
							price={34.99} 
							image="https://lp2.hm.com/hmgoepprod?set=source[/c8/f9/c8f92bdd9bf5af94cc79c824e4cbd8dad3bc3542.jpg],origin[dam],category[men_trousers_dressed],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" 
						/>
					</div>

					<div className="mens__pant rowBottom">
						<Product 
							id="108" 
							title="Cotton Cargo Pants" 
							price={39.99} 
							image="https://lp2.hm.com/hmgoepprod?set=source[/31/cc/31cc7646ba928a0e3d822ed222f4635e2046c266.jpg],origin[dam],category[men_trousers_cargo],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]" 
						/>
					</div>
				</div>
			</section>

			<section className="mens__shoes">
				<h1>Shoes</h1>
				<div className="mens__shoesContainer">
					<div className="mens__shoe rowTop">
						<Product 
							id="109" 
							title="Mesh Sneakers" 
							price={49.99} 
							image="https://lp2.hm.com/hmgoepprod?set=source[/14/92/14923b1fc8d956da058e0dee0c6fcb30aa775efc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" 
						/>
					</div>

					<div className="mens__shoe rowTop">
						<Product 
							id="110" 
							title="Chelsea-style Boots" 
							price={49.99} 
							image="https://lp2.hm.com/hmgoepprod?set=source[/1b/9b/1b9b1e9f05c0b119046ddf3a25a7ca3110f1d119.jpg],origin[dam],category[men_shoes_boots],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" 
						/>
					</div>

					<div className="mens__shoe rowBottom">
						<Product 
							id="111" 
							title="Velvet Loafers" 
							price={39.99} 
							image="https://lp2.hm.com/hmgoepprod?set=source[/eb/0f/eb0f3b766bff9764b5bff222ae925c8ca7def633.jpg],origin[dam],category[men_shoes_loafers],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" 
						/>
					</div>

					<div className="mens__shoe rowBottom">
						<Product 
							id="112" 
							title="Penny Loafers" 
							price={39.99} 
							image="https://lp2.hm.com/hmgoepprod?set=source[/5d/72/5d72813e5a670283983032c79fd19fd78d52f963.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[1]&call=url[file:/product/main]" 
						/>
					</div>
				</div>
				
			</section>

		</div>
	)
}

export default Mens
