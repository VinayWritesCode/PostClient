import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const queryParamsContainer = document.querySelector('[data-query-params]')
const requestHeadersContainer = document.querySelector('[data-request-headers]')
const TemplateKey = document.querySelector('[data-key-value-template]')


queryParamsContainer.append(createKeyValuePair())
requestHeadersContainer.append(createKeyValuePair())

document.querySelector('[data-add-query-param-btn]').addEventListener("click", () => {
    queryParamsContainer.append(createKeyValuePair())
})

function createKeyValuePair() {
    const element = TemplateKey.content.cloneNode(true)

    element.querySelector('[data-remove-btn]').addEventListener('click', (e) => {
        e.target.closest('[data-key-value-pair]').remove()
    })

    return element
}
