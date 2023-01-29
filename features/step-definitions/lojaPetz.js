const { Given, When, Then, After } = require("@wdio/cucumber-framework")
const barraPesquisa = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView'

Given (/^que entrei no aplicativo da Petz e estou na pagina de pesquisa$/,async () => {
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

Then(/^visualizo a racao "([^"]*)?"$/, async (nomeEsperado) => {
    const nomeRacao = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView'
    await $(nomeRacao).waitForDisplayed()
    expect(await $(nomeRacao).getText()).toEqual(nomeEsperado)
})

When (/^adiciono o produto ao carrinho$/, async () => {
    const botaoAdicionar = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.LinearLayout/android.widget.Button'
    await $(botaoAdicionar).waitForDisplayed()
    await $(botaoAdicionar).click()
})

Then(/^mensagem "([^"]*)?"$/, async (msgEsperada) => {
    const msg = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.ScrollView/android.widget.LinearLayout/android.view.ViewGroup/android.widget.TextView[1]'
    await $(msg).waitForDisplayed()
    expect(await $(msg).getText()).toEqual(msgEsperada)
})

When (/^vou para o carrinho$/, async () => {
    const irParaCarrinho = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.Button[2]'
    await $(irParaCarrinho).waitForDisplayed()
    await $(irParaCarrinho).click()
})

Then(/^subtotal tem quantidade "([^"]*)?" e valor "([^"]*)?"$/, async (qtdSubtotEsperada, valorSubtotEsperado) => {
    const qtdSubTot = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[2]'
    await $(qtdSubTot).waitForDisplayed()
    expect(await $(qtdSubTot).getText()).toEqual(qtdSubtotEsperada)

    const valorSubTot = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.TextView[4]'
    await $(valorSubTot).waitForDisplayed()
    expect(await $(valorSubTot).getText()).toEqual(valorSubtotEsperado)
})

When (/^adiciono mais uma unidade do produto desejado$/, async () => {
    const maisUm = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.LinearLayout/androidx.recyclerview.widget.RecyclerView/android.view.ViewGroup/android.widget.LinearLayout[3]/android.widget.RelativeLayout[3]/android.widget.ImageView'
    await $(maisUm).waitForDisplayed()
    await $(maisUm).click()
})