import { Entity, Column } from "typeorm"
import { UserInterface } from "../user/interface";
import { InstanceIdentification } from "../inherited_classes";

@Entity()
export class Student extends InstanceIdentification {
    @Column()
    userId: number;
    @Column()
    user: UserInterface;
    @Column()
    intro: string;
    @Column()
    aboutParagraphs: string[];
    @Column()
    portraitImgUrl: string;
}
