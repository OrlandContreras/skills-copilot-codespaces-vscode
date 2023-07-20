function skillMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/skill/member.html',
        controller: 'SkillMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}
