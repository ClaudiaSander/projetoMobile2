const { Given, When, Then, After } = require("@wdio/cucumber-framework")
const barraPesquisa = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'

Given (/^que entrei no aplicativo da Petz e estou na pagina de pesquisa$/,async () => {
    // validar se apresentou campo para informar usario
    /*
    const user = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.RelativeLayout[1]/android.widget.EditText'
    await $(user).waitForDisplayed()
    await $(user).setValue('')

    const senha ='/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.RelativeLayout[2]/android.widget.EditText'
    await $(senha).waitForDisplayed()
    await $(senha).setValue('')
    
    const botaoEntrar = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.RelativeLayout/android.widget.TextView'
    await $(botaoEntrar).waitForDisplayed()
    await $(botaoEntrar).click()
    */

    // entrar sem login
    const comecarSemLogin = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.RelativeLayout[2]/android.widget.TextView'
    await $(comecarSemLogin).waitForDisplayed()
    await $(comecarSemLogin).click()
    
    await $(barraPesquisa).waitForDisplayed()
})

When(/^pesquiso o produto "([^"]*)?"$/, async (textoPesquisa) => {
    await $(barraPesquisa).click()
    
    const campoPesquisa = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.EditText'
    await $(campoPesquisa).waitForDisplayed()
    await $(campoPesquisa).setValue(textoPesquisa)
    })


When(/^aciono a consulta$/, async () => {
    const enter = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout'
    await $(enter).waitForDisplayed()
    await $(enter).click()
})

When(/^clico na imagem da racao$/, async () => {    
    const imagem = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]'
    await $(imagem).waitForDisplayed()
    await $(imagem).click()
})

Then(/^visualizo a racao "([^"]*)?"$/, async (nomeEsperado) => {
    const nomeRacao = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]/android.widget.TextView[1]'   
    await $(nomeRacao).waitForDisplayed()
    expect(await $(nomeRacao).getText()).toEqual(nomeEsperado)
})

Then(/^visualizo o preco "([^"]*)?"$/, async (precoEsperado) => {
    const precoRacao = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup[1]/android.widget.TextView[1]'   
    await $(precoRacao).waitForDisplayed()
    expect(await $(precoRacao).getText()).toEqual(precoEsperado)
})