function newGovernanceFunctionLibraryMentorshipProgram() {
    let thisObject = {
        calculate: calculate
    }

    return thisObject

    function calculate(
        pools,
        userProfiles
    ) {
        UI.projects.governance.utilities.mandatoryProgram.run(
            pools,
            userProfiles
        )
    }
}