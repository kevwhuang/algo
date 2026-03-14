// 2115 - Find All Possible Recipes From Given Supplies

function findAllRecipes(recipes, ingredients, supplies) {
    function dfs(recipe, needs) {
        for (let i = 0; i < needs.length; i++) {
            if (supplies.has(needs[i])) continue;
            const idx = recipes.indexOf(needs[i]);
            if (idx === -1) return;
            const nextRecipe = recipes.splice(idx, 1)[0];
            const nextNeeds = ingredients.splice(idx, 1)[0];
            if (!dfs(nextRecipe, nextNeeds)) return;
        }
        supplies.add(recipe);
        res.push(recipe);
        return true;
    }
    supplies = new Set(supplies);
    const res = [];
    while (recipes.length) dfs(recipes.shift(), ingredients.shift());
    return res;
}
