import { PartialType } from '@nestjs/mapped-types';
import { CreateChaptersUsersMeetingDto } from './create-chapters-users-meeting.dto';

export class UpdateChaptersUsersMeetingDto extends PartialType(CreateChaptersUsersMeetingDto) {}
