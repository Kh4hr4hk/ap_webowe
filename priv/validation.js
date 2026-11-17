export function validateItem(name, quantityText) {
    const trimmedName = name.trim();
    if (trimmedName.length > 30 || trimmedName.length < 2) {
        return "Nazwa musi mieć od 2 do 30 znakow i nie moze zawierac samych spacji.";
    }
    const quantityTrimmed = quantityText.trim();
    const quantityNumber = Number(quantityTrimmed);
    if (!Number.isInteger(quantityNumber) || quantityNumber < 1 || quantityTrimmed === "" || quantityNumber > 99) {
        return "Ilość nie może być pusta, musi być liczbą całkowitą od 1 do 99";
    }
    return null;
}
