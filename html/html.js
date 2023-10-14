const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  })

  const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))
