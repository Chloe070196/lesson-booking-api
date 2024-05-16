import TeacherService from "../../services/teacher/index.ts";

export class TeacherController {
  public constructor(private readonly teacherService: TeacherService) {}
}
