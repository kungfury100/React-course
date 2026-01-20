export const calculatePayment = (_price, _downPayment, _period, _marginal, _euribor) => {
    return (_price - _downPayment) / _period / 12
    * (_marginal + _euribor) / 3
}