import { Entity, Column } from "typeorm"
import { InstanceIdentification } from "../inherited_classes.ts";

@Entity()
export class Teacher extends InstanceIdentification {
    @Column()
    intro: string;
    @Column()
    aboutParagraphs: string;
    @Column()
    portraitImgUrl: string;
}
