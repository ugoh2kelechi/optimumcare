export default function Search({ isSearch, handleSearch }) {
	return (
		<>
			<div className="offcanvas offcanvas-top offcanvas-search" id="canvasSearch">
				<button className="btn-close-search" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
					<i className="icon-close" />
				</button>
				<div className="tf-container">
					<div className="row">
						<div className="col-12">
							<div className="offcanvas-body">
								<form action="#" className="form-search-courses">
									<div className="icon">
										<i className="icon-keyboard" />
									</div>
									<fieldset>
										<input type="text" placeholder="Search for anything" name="text" tabIndex={2} aria-required="true" required />
									</fieldset>
									<div className="button-submit">
										<button type="submit">
											<i className="icon-MagnifyingGlass fs-20" />
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}
